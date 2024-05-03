import { Topic } from "@/app/hooks/useTopic";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { MutableRefObject, useEffect, useState } from "react";

import { AiOutlineCloseCircle, AiOutlineMessage } from "react-icons/ai";
import { ChatInterface } from "../chat/interface";

import style from '../../../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ExtendedColors } from "../../../../tailwind";


const { theme } = resolveConfig(style)
const colors : ExtendedColors = theme.colors

interface SideDrawerProps {
  currentTopicRef: MutableRefObject<ChatInterface | null>,
  getTopic: (id: string) => Topic,
  addTopic: () => void,
  getTopics: () => Topic[],
  deleteTopic: (id: string) => void,
  changeTopic: (topic: Topic) => void,
}

function SideDrawer ({
  currentTopicRef,
  getTopics,
  addTopic,
  getTopic,
  deleteTopic,
  changeTopic,
}: SideDrawerProps){
  const [topics, setTopics] = useState<Topic[]>();

  const handleCreateTopic = (e: any) => {
    e.preventDefault();
    addTopic();
    const topicsList = getTopics();
    setTopics(topicsList);
  };

  const handleChat = (e: any, id: string) =>{
    e.preventDefault();
    const topic = getTopic(id);
    changeTopic(topic);
    currentTopicRef.current = topic; // eslint-disable-line no-param-reassign
  };

  const handleDeleteTopic = (e: any, topic: Topic) => {
    e.preventDefault();
    deleteTopic(topic.id);
    const topicsList = getTopics();
    setTopics(topicsList);
  };

  useEffect(() => {
    const topicsList = getTopics();
    setTopics(topicsList);
  }, []);

  return (
    <Flex
      direction="column"
      width="25%"
      position="fixed"
      left="0"
      bottom="0"
      top="0"
      bg="gray.200"
      p="4"
      minW="25px"
      maxH="70%"
      maxW="25%"
      background="white"
      minH="80%"
      padding="15px"
      alignSelf="center"
      borderRadius="20px"
      boxShadow="md"
    >
      <Button
          borderColor={colors?.primary}
          variant="outline"
          color={colors?.primary}
          _hover={{ background: colors?.primary, color: colors?.light}}
          onClick={handleCreateTopic}>Create new topic</Button>
      {/* Sidebar content */}
      <ul style={{ overflow: "scroll" , paddingTop: "15px"}}>

        {
          topics?.map(topic => (
            <li
              style={{
                padding: "10px",
                paddingLeft: "0",
                marginBottom:"10px",
              }}
              className="hov:bg-aqua"
              id={topic.id}
              key={topic.id}
            >
              <Box
                key={topic.id}
                width="auto"
                className="bg-token-surface active:scale-95 truncate cursor-pointer"
                style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                // className={cs('bg-token-surface active:scale-95 truncate cursor-pointer', {
                //   active: currentTopicRef?.current?.id === topic.id
                // })}
                onClick={(e) => handleChat(e, topic.id)}
              >
                <Flex
                  gap="2"
                  align="center"
                  direction="row"
                  marginRight="10px"
                  borderRadius="10px"
                  padding="10px"
                  color={colors?.tertiary}
                >
                  <AiOutlineMessage className="h-4 w-4" />
                  <Text as="p" className="truncate">
                    {topic.name}
                  </Text>
                </Flex>
                <IconButton
                    aria-label="topic"
                    size="2"
                    className="cursor-pointer"
                    variant="ghost"
                    color={colors?.tertiary}
                    // radius="full"
                    onClick={(e) => handleDeleteTopic(e, topic)}
                  >
                    <AiOutlineCloseCircle className="h-4 w-4" />
                  </IconButton>

              </Box>
            </li>
          ))
        }

      </ul>
    </Flex>
  );
};

export default SideDrawer;
