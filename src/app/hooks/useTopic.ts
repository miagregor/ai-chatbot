import { MutableRefObject, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { ChatInterface, ChatMessage } from "../components/chat/interface";
import { Persona } from "./usePersona";

export interface Topic {
  id: string
  name: string
  persona: Persona
  messages: Array<ChatMessage>
}

export interface TopicHook {
  addTopic: void,
  deleteTopic: void,
  saveMessagesToTopic: (messages: ChatMessage[]) => void,
  currentTopicRef: MutableRefObject<ChatInterface | null>,
  currentTopicId: string,
  topicMessages: ChatMessage[],
  getTopics: void,
  getTopic: void,
  changeTopic: void
}

const StorageKeys = {
  topics: "topics",
  currentTopic: "currentTopic",
};

let i = 0;

export const useTopic = (persona: Persona | undefined) => {
  const currentTopicRef = useRef<ChatInterface | null>(null);
  const [currentTopicId, setCurrentTopicId] = useState<string>("");
  const [topicMessages, setTopicMessages] = useState<ChatMessage[] | undefined>([]);

  const getTopics = () => {
    const topicsList = localStorage.getItem(StorageKeys.topics) || "[]";
    return JSON.parse(topicsList);
  };

  const getTopic = (id: string) => {
    const topics = getTopics();
    return topics.find((topic: Topic) => topic.id === id);
  };

  const addTopic = () => {
    const id = `topic_${uuid()}`;
    const name = `New Topic No. ${i}`;
    // TO dO:::Remove
    i += 1;

    const topic = { id, name, persona, messages: [] };
    const topics = getTopics();
    topics.push(topic);
    localStorage.setItem(StorageKeys.topics, JSON.stringify(topics));
  };

  const deleteTopic = (id: string) => {
    const topics = getTopics();
    const updatedTopics = topics.filter((topic: Topic) => topic.id !== id);
    localStorage.setItem(StorageKeys.topics, JSON.stringify(updatedTopics));
  };

  const saveMessagesToTopic = (messages: ChatMessage[]) => {
    const topics = getTopics();
    if(messages.length > 1) {
      const updatedTopics = topics.map((topic: Topic) => {
        if(topic.id === currentTopicId) {
          const currentMessages = topic.messages;
          const newMessages = messages.filter(
            (message: ChatMessage) => !currentMessages.some(
              (existingMessage: ChatMessage) => existingMessage.id === message.id,
              ),
            );
          topic.messages = [ ...currentMessages, ...newMessages ]; // eslint-disable-line no-param-reassign
        }
        return topic;
      });

      if(updatedTopics) {
        localStorage.setItem(StorageKeys.topics, JSON.stringify(updatedTopics));
      }
    }
  };

  const changeTopic = (topic: ChatInterface) => {
    currentTopicRef.current = topic;
    localStorage.setItem(StorageKeys.currentTopic, topic.id);
    setCurrentTopicId(topic.id);
    setTopicMessages(topic.messages);
  };

  const clearMessages = () => {
    const topics = getTopics();

    const updatedTopics = topics.map((topic: Topic) => {
      if(topic.id === currentTopicId) {
        topic.messages = []; // eslint-disable-line no-param-reassign
      }
      return topic;
    });

    if(updatedTopics) {
      localStorage.setItem(StorageKeys.topics, JSON.stringify(updatedTopics));
    }

  };

  useEffect(() => {
    const topics = localStorage.getItem(StorageKeys.topics);

    if(!topics) {
      const id = `topic_${uuid()}`;
      const name = `New Topic No. ${i}`;
      // TO DO: Remove
      i += 1;

      const topic = { id, name, persona, messages: [] };
      const topicsList = JSON.stringify([topic]);

      localStorage.setItem(StorageKeys.topics, topicsList);
      localStorage.setItem(StorageKeys.currentTopic, topic.id);

      currentTopicRef.current = topic;
      setTopicMessages(topic.messages);
      setCurrentTopicId(topic.id);
    } else {
      const topicsList = JSON.parse(topics);
      const currTopicId = localStorage.getItem(StorageKeys.currentTopic);

      const currTopic = topicsList.find((topic: Topic) => topic.id === currTopicId);

      currentTopicRef.current = currTopic;
      setTopicMessages(currTopic.messages);
      setCurrentTopicId(currTopic.id);
    }
 }, [persona]);

 useEffect(() => {
   const fetchMessagesForCurrentTopic = () => {
     const topics = getTopics();
     const currentTopic = topics.find((topic: Topic) => topic.id === currentTopicId);
     if (currentTopic) {
      setTopicMessages(currentTopic.messages);
     }
   };

   fetchMessagesForCurrentTopic();
 }, [currentTopicId]);

  return {
    addTopic,
    deleteTopic,
    saveMessagesToTopic,
    currentTopicRef,
    currentTopicId,
    topicMessages,
    getTopics,
    getTopic,
    changeTopic,
    clearMessages,
  };
};
