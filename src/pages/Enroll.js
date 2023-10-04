import {
  Image,
  Heading,
  Box,
  Text,
  Button,
  Center,
  Link,
} from "@chakra-ui/react";

import MembershipForm from "../components/MemebershipForm";

export default function Enroll() {
  return (
    <>
      <Box py="10px" bg="gray.200" m="2">
        <Heading m="2" p="2">
          入会案内
        </Heading>
        <Heading
          m="2"
          p="2"
          fontSize="xl"
          color="orange.400"
          borderBottom="2px solid orange"
        >
          Admission
        </Heading>
        <Text m="2" p="2">
          <p></p>
          選手を目指す人・ダイエットが目的の人・仲間が欲しい人・健康が目的の人。
          <p></p>
          目的は何でも構いません。目的の違う人が集まって格闘技を楽しむ場所です。
          <p></p>
          男性・女性問わず、格闘技経験・運動部経験の無い人でも、無理せず練習に参加できます。
          <p></p>XXXGymで格闘技を楽しみましょう！
        </Text>
      </Box>
      <Image
        maxW="100%"
        maxH="250px"
        margin="3"
        src="https://noguchigym.com/wp-content/uploads/2020/02/02-02hituyounamono.gif"
      />
      <MembershipForm />
      <Link href={`/login`}>
        <Center m="2">
          <Button m="1" size="lg" backgroundColor="blue.300">
            申し込み⇒
          </Button>
        </Center>
      </Link>
    </>
  );
}
