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
  "https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/327322070_698153178475695_3218884610407369476_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eBCDCLZViW4AX8J9na0&_nc_ht=scontent.fbkk7-3.fna&_nc_e2o=f&oh=00_AfCxr9PY89c_XEtBW2WaZxjg3yIVFOc1YvCluQJMarzD8A&oe=653CE1C4";

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
