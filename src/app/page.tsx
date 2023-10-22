"use client";
import Image from "next/image";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@chakra-ui/react";

import {
  Flex,
  Spacer,
  Center,
  Text,
  Box,
  Container,
  Stack,
} from "@chakra-ui/react";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";

export default function Home() {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "load successfully.",
      position: "bottom-right",
      status: "success",
      isClosable: true,
      duration: 1500,
    });
  });
  return (
    <>
      <Navbar />
      <Container maxW={"5xl"} p={1}>
        <Box maxW={"3xl"} p={5}>
          <Hero />
        </Box>

        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
          justifyContent={"center"}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box justifyContent={"center"}>
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Card />
              </Flex>
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Card />
              </Flex>
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Card />
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Testimonials />
      <Footer />
    </>
  );
}
