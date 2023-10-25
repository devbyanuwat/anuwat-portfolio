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
  "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.18169-9/11024596_473601582798654_4542727458461198007_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=908e45&_nc_eui2=AeGw_J2Ep-8K6vq-zAuXIs8eJ7CHeilXRcYnsId6KVdFxjavuWFbgLCAzRyFFNo69Ae1R8vKBManTpVhPjvnG-Aa&_nc_ohc=mUT1R2GVst4AX99gyo3&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfD_LJ4Svxkkm13yOuR7m5GmaxxZhmLOXbrWJsX_k2107A&oe=656030CF";
export default function CardToey() {
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
            นายศตวรรษ ตุ๊สำราญ
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
