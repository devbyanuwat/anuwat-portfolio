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
  "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.6435-9/38472421_1925185567545732_7619119919786885120_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeE9m6a5vi5tbvwB3js9ujMWVlCdezViYxlWUJ17NWJjGQvcISAG8kaTyabNAfqdGTQBtGgvlXZYQsImEM-9IN7M&_nc_ohc=F_RmIMIkyJEAX_fN1j2&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfDo0jl35D_PSEsCGoy10pwrhlz8AOQCTfDxurnU5BmCGA&oe=656028D5";
export default function CardNoppawut() {
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
            นายณพวุฒิ เอี่ยมวัฒน์
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
