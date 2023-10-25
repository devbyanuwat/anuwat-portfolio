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
  "https://scontent.fbkk7-3.fna.fbcdn.net/v/t31.18172-8/26952696_1810541655653787_5981477769104866622_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeFsgNgrd2jpjJOdvH7HTRWxc85bvhqhjXZzzlu-GqGNdmzv87OFVNzbVJLPuOn4ksnwXJEivX5T0L7WazAwVbI-&_nc_ohc=xGtqOHtH8egAX94toF_&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfB1e0mghKIKsuztVoZaOctFOhJ1Knmogw3L_S5WN7aWJA&oe=656044E1";

export default function CardK() {
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
            นายนเรนทร์ฤทธิ์ ปานฉล
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
