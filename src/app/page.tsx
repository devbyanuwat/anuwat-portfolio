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
import CardPothai from "@/components/CardPothai";
import CardAnuwat from "@/components/CardAnuwat";
import CardToey from "@/components/CardToey";
import CardK from "@/components/CardK";
import CardNoppawut from "@/components/CardNoppawut";
import TimeLine from "@/components/Timeline";

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
      <Container maxW={"6xl"} p={1}>
        <Box maxW={"6xl"} p={5} width={"full"}>
          <Hero />
        </Box>
        <Flex justify={"center"}>
          <Box alignItems={"center"}>
            <Text fontSize={30} textAlign={"center"}>
              แผนผังหน่วยงาน
            </Text>
            <Text fontSize={20} color={"grey"} textAlign={"center"}>
              Organizational chart{" "}
            </Text>
          </Box>
        </Flex>
        <CardPothai />

        <Flex
          paddingTop={3}
          gap={6}
          justify={"center"}
          direction={{ base: "column", md: "row" }}
        >
          <CardAnuwat />
          <CardToey />
          <CardK />
          <CardNoppawut />
        </Flex>
        <Flex justify={"center"} justifyContent={"center"}>
          <Box maxW={"full"}>
            <TimeLine />
          </Box>
        </Flex>
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
