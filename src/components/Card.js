import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <HStack bg={"white"} style={{ color: "#000000", borderRadius: "10px" }}>
      <VStack>
        <Image
          src={imageSrc}
          style={{ color: "#000000", borderRadius: "10px" }}
        ></Image>
        <Text
          style={{
            fontSize: 30,
            textAlign: "left",
            display: "flex",
            width: "100%",
            padding: "10px",
            fontWeight: 600,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "left",
            width: "100%",
            padding: "5px 10px",
          }}
        >
          {description}
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "left",
            width: "100%",
            padding: "5px 10px 15px",
            cursor: "pointer",
          }}
        >
          Mirar más <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>{" "}
        </Text>
      </VStack>
    </HStack>
  );
};

export default Card;
