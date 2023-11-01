"use client";

import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
export default function Testimonials() {
  function MyImage() {
    return (
      <Avatar
        src="/static/images/profile.PNG"
        // alt="Insurance"
        // width={100}
        // height={80}
        mb={2}
      />
    );
    function InsuranceImg() {
      return (
        <Image
          src="/static/images/insurance.jpg"
          alt="Insurance"
          width={300}
          height={200}
        />
      );
    }
  }
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae aliquid aspernatur non error. Voluptates, corporis.
        Veritatis nam eos eum asperiores assumenda aperiam quos quibusdam,
        commodi culpa laborum, quisquam impedit.
      </Text>
      <Box textAlign={"center"}>
        <MyImage />

        <Text fontWeight={600}>Anuwat Tansanguan</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Fullstack Webdeveloper
        </Text>
      </Box>
    </Stack>
  );
}
