"use client";

import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Divider,
  ButtonGroup,
  Button,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Badge,
  Code,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import Carousels from "./Carousels";

export default function blogPostWithImage() {
  function BackdropExample() {
    const OverlayOne = () => (
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);

    return (
      <>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
          <SearchIcon />
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={"xl"}>
          {overlay}
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                <Carousels />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur blanditiis quas quibusdam corrupti assumenda, eum aut
                non aliquam expedita voluptatem quis illum eaque consequatur qui
                soluta cumque ad iste voluptates!
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  return (
    <Card maxW="lg">
      <CardBody>
        <Image
          src="/static/images/bos.png"
          width={600}
          height={200}
          alt="Green double couch with wooden legs"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            LMG INSURANCE <Code>API</Code>
          </Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" justifyContent={"end"} w={"full"}>
          <BackdropExample />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
