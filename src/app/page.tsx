"use client";

import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Chat from "./components/chat/chat";
import Header from "./components/shared/header";
import SideDrawer from "./components/sideDrawer/sideDrawer";
import { usePersona } from "./hooks/usePersona";
import { useTopic } from "./hooks/useTopic";

export default function Home() {
  const { persona, onGetPersona } = usePersona();

  useEffect(() => {
    onGetPersona();
  }, []);

  const {
    currentTopicRef,
    saveMessagesToTopic,
    currentTopicId,
    topicMessages,
    getTopic,
    getTopics,
    addTopic,
    deleteTopic,
    changeTopic,
  } = useTopic(persona);

  return (
    <Flex w="100%" h="100%">
      <Flex direction="column" w="100%">
        <Header />
          <Flex direction="row" w="100%" pl="25%" paddingTop="100px" justifyContent="center">
            <SideDrawer
              currentTopicRef={currentTopicRef}
              getTopics={getTopics}
              addTopic={addTopic}
              getTopic={getTopic}
              deleteTopic={deleteTopic}
              changeTopic={changeTopic}
            />
            <Chat
              currentTopicRef={currentTopicRef}
              saveMessagesToTopic={saveMessagesToTopic}
              currentTopicId={currentTopicId}
              topicMessages={topicMessages}
            />
          </Flex>
      </Flex>
    </Flex>
  );
}
