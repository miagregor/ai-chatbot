import { Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import Logo from "../logo/logo";

import style from '../../../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ExtendedColors } from "../../../../tailwind";


const { theme } = resolveConfig(style)
const colors : ExtendedColors = theme.colors

function Header() {
    return (
      <header
        className="block sticky top-0 z-20"
        style={{ width: "-webkit-fill-available"}}
      >
        <Flex
          align="center"
          gap="3"
          className="shadow-sm shadow-gray-500"
          padding=" 0 0 0 10px"
          background={colors.primary}
          h="50px"
          borderRadius="100px"
          margin="7px"
        >
          <NextLink href="/">
            <Logo/>
          </NextLink>
          <div style={{ padding: "15px", color: "white"}}>
            AI Chatbot Assistant
          </div>
        </Flex>
      </header>
    );
  }
export default Header;