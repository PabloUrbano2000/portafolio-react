import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hola, Soy Pablo!";
const bio1 = "Soy un desarrrollador frontend";
const bio2 = "especializado en React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        src="https://th.bing.com/th/id/OIP.-11H1XXFiipbz9Sdn3e97AHaIs?pid=ImgDet&rs=1"
        style={{ width: 90, height: 90 }}
      ></Avatar>
      <Heading fontSize={40}>{greeting}</Heading>
      <Text fontSize={25}>{bio1}</Text>
      <Text fontSize={25}>{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
