"use client";

import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Flex, VStack, StackDivider, Input } from "@chakra-ui/react";
import Clipboard from "clipboard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ChatInterface, ChatMessage } from "./interface";
import Message from "../message/message";

import style from '../../../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ExtendedColors } from "../../../../tailwind";


const { theme } = resolveConfig(style)
const colors : ExtendedColors = theme.colors

export interface ChatProps {
  currentTopicRef: MutableRefObject<ChatInterface | null>,
  saveMessagesToTopic: (messages: ChatMessage[]) => void,
  currentTopicId: string,
  topicMessages: ChatMessage[] | undefined,
}

const postChatOrQuestion = async (chat: ChatInterface | null, messages: any[], input: string) => {
  const url = "/api/chat";

  const data = {
    chatId: chat?.id,
    messages: [...messages!],
    input,
  };
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/event-stream",
    },
    body: JSON.stringify(data),
  });
};

function Chat ({ 
  currentTopicRef, 
  saveMessagesToTopic, 
  currentTopicId, 
  topicMessages 
}: ChatProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [currentMessageId, setCurrentMessageId] = useState<number>(0);
  const [currentMessageSources, setCurrentMessageSources] = useState<Array<string>>([]);
  const conversation = useRef<ChatMessage[]>([]);
  const bottomOfChatRef = useRef<HTMLDivElement>(null);
  const [topicState, setTopicState] = useState<Boolean>(false);

  const sendMessage = useCallback(
    async (e: any) => {
      if (!isLoading) {
        e.preventDefault();
        // const input = message
        const id = conversation.current.length;

        const messages = [...conversation.current];
        conversation.current = [
          ...conversation.current,
          { content: message, role: "user", id, sources: [] },
        ];
        setIsLoading(true);
        try {
          const response = await postChatOrQuestion(currentTopicRef.current, messages, message);

          if(!response.body) {
            throw Error("Something went wrong when message was sent.");
          }

          const reader = response.body?.getReader();

          let done = false;
          let resultContent = "";
          let msgId = 0;
          let msgSources: string[] = [];

          while (!done) {
            const { done: readerDone, value } = await reader.read();
            if (readerDone) break;

            const decoder = new TextDecoder("utf-8");
            const decodedMsg = decoder.decode(value);
            let msgs = decodedMsg.split("\n");
            msgs = msgs.filter(msg => msg !== "");

            msgs.forEach( msgElement => {
              const msg = JSON.parse(msgElement);
              const char = msg.content;
              const isFinished = msg.finish_reason === "stop";

              if(currentMessageId !== msg.id) {
                msgId = msg.id;
                setCurrentMessageId(msgId);
              }

              if(msg?.sources) {
                msgSources = msg.sources;
                setCurrentMessageSources(msgSources);
              };

              if (char) {
                  setCurrentMessage((state) => state + char);
                  resultContent += char;
              }

              if(isFinished) done = true;
            });
          }
          setTimeout(() => {
            conversation.current = [
              ...conversation.current,
              { content: resultContent, role: "ai", id: msgId, sources: msgSources },
            ];

            setCurrentMessage("");
          }, 1000);

          setIsLoading(false);
          setMessage("");
        } catch (error: any) {
          setIsLoading(false);
        }
      }
    },
    [currentTopicRef, isLoading, message],
  );

  const handleKeypress = useCallback(
    (e: any) => {
      if (e.keyCode === 13 && !e.shiftKey) {
          sendMessage(e);
        e.preventDefault();
      }
    },
    [sendMessage],
  );
  
  useEffect(() => {
    new Clipboard(".copy-btn").on("success", () => {});
  }, []);

  useEffect(() => {
    bottomOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessage, message]);

  useEffect(() => {
    saveMessagesToTopic?.(conversation.current);
    setTopicState(!topicState);
  }, [conversation.current]);

  useEffect(() => {
    if(topicMessages) {
      conversation.current = topicMessages;
      setTopicState(!topicState);
    }
  }, [currentTopicId]);

  return (
    <Flex
      direction="column"
      maxHeight="90%"
      gap="3"
      width="70%"
      bottom="0"
      scrollBehavior="smooth"
      alignItems="flex-start"
      position="fixed"
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        className="flex-1 px-4"
        overscrollBehavior="smooth"
        style={{ height: "100%", overflow:"scroll", width: "100%" }}
      >
        { conversation.current.map((item, index) => (
          <Message key={index} message={item} /> // eslint-disable-line react/no-array-index-key
          ))
        }
        { currentMessage &&
          (
            <Message
              message={{
                content: currentMessage,
                role: "ai",
                id: currentMessageId,
                sources: currentMessageSources,
              }}
            />
          )
        }
        <div ref={bottomOfChatRef} />
      </VStack>
      <div className="px-4 pb-3 w-maxWidth sticky bottom-0">
        <Flex align="end" justify="between" gap="3" className="relative">
          <div className="
            rt-TextAreaRoot
            rt-r-size-1
            rt-variant-surface
            flex-1
            rounded-3xl
            chat-textarea">
            <Input
              autoFocus={true}
              value={message}
              borderColor={colors?.primary}
              _focus={{ borderColor: colors?.primary }}
              _focusVisible={{ boxShadow: `0 0 0 1px ${colors?.primary }`}}
              disabled={isLoading}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={ (e) => handleKeypress(e) }
            />
            <div className="rt-TextAreaChrome" />
          </div>
          <Flex gap="3" className="absolute right-0 pr-4 bottom-2 pt">
            {isLoading && (
              <Flex
                width="6"
                height="6"
                align="center"
                justify="center"
                style={{ color: "var(--accent-11)" }}
              >
                <AiOutlineLoading3Quarters className="animate-spin h-4 w-4" />
              </Flex>
            )}
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default Chat;
