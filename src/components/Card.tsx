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
          src="/static/Images/bos.png"
          width={600}
          height={200}
          alt="Green double couch with wooden legs"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            LMG INSURANCE <Code>API</Code>
          </Heading>
          <Stack direction={"row"}>
            <Text>
              ระบบออกพรบ. และกธ. โดยมีการพัฒนาด้วยเครื่องมือ{" "}
              <Badge variant="outline" colorScheme="red">
                Laravel8
              </Badge>{" "}
              <Badge variant="outline" colorScheme="green">
                Line notify
              </Badge>{" "}
              และสามารถตรวจสอบการทำงานหรือรายชื่อผู้ใช้ ยอดขาย และกราฟได้โดย{" "}
              <Badge variant="outline" colorScheme="yellow">
                web service
              </Badge>
            </Text>
          </Stack>
        </Stack>
      </CardBody>
      <Divider />
      {/* <CardFooter>
        <ButtonGroup spacing="2" justifyContent={"end"} w={"full"}>
          <BackdropExample />
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
}
