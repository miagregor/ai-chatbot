import { Avatar, Flex } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect, useState } from "react";
import { BsRobot } from "react-icons/bs";
import { Markdown } from "../shared/markdown";
import { ChatMessage } from "../chat/interface";
import RatingButtons from "./rate-buttons";
import SourceAnchors from "./source-anchors";

import style from '../../../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ExtendedColors } from "../../../../tailwind";


const { theme } = resolveConfig(style)
const colors : ExtendedColors = theme.colors

export interface MessageProps {
  message: ChatMessage
}

const allowedTags = ["br", "img", "table", "thead", "tbody", "tr", "td", "th"];

const sanitizeMessage = (content: string) => {
  const regex = new RegExp(`<((?!/?(${allowedTags.join("|")})\\b)[^<>]+?)>`, "gi");
  return content.replace(regex, "");
};

function Message(props: MessageProps) {
  const [showSources, setShowSources] = useState(false);
  const [sanitizedMessage, setSanitizedMessage] = useState("");
  const { message } = props;
  const isUser = message.role === "user";

  const { sources } = message;

  useEffect(() => {
    const show = sources.length > 0 && sources !== undefined;
    setShowSources(show);
  }, [sources]);

  useEffect(() => {
    if(message.content !== "" && message) {
      const msg = sanitizeMessage(message.content);
      setSanitizedMessage(msg);
    }

  }, [message]);

  return (
    <Flex
      gap="4"
      className="mb-5"
      width="100%"
      marginBottom="0"
      padding="15px"
      alignSelf="center"
      direction="column"
    >
      <Flex direction="row">
        <Avatar
          bg={ isUser ? colors?.dark : colors?.primary }
          borderRadius="100%"
          height="25px"
          width="25px"
          icon={
            isUser
              ?
                ( <AiOutlineUser fontSize="1rem" color="white"/> )
              :
                (<BsRobot fontSize="1rem" color="white" />)
            }
        />
          <div style={{ fontWeight: "bold", paddingLeft:"15px" }}>
            {isUser ? "You" : "Dexcom bot"}
          </div>
      </Flex>
      <div
        className="flex-1 pt-1 break-all max-width-200"
        style={{ paddingLeft: "40px", color: colors?.dark, wordBreak: "break-word" }}
        id={ message.id.toString() }
      >
        { isUser ? (
          <div>
            {sanitizedMessage}
          </div>
        ) : (
          <Markdown>{message.content}</Markdown>
        ) }
      </div>
      { showSources && <SourceAnchors sources={sources}/> }
      { !isUser && <RatingButtons messageId={message.id}/> }
    </Flex>
  );
}

export default Message;
