"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Avatar,
} from "@chakra-ui/react";

const IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/anuwat-portfolio.appspot.com/o/fill-portfolio.jpeg?alt=media&token=1e47c7c8-4eab-4ff0-8fec-786b266d974a&_gl=1*1ad89x0*_ga*MTM2NTg2ODY3My4xNjkxNTc1NTg3*_ga_CW55HF8NVT*MTY5ODgwNDc3OS4zOC4xLjE2OTg4MDQ4OTAuMzEuMC4w";

export default function CardAnuwat() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            FULL STACK WEB DEVELOPER
          </Text>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            นายอนุวัชร ตันสงวน
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
