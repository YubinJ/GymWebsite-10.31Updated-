import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";

export default function Intro() {
  return (
    <>
      <Container bg="gray.200" maxWidth="4xl" py="10px">
        <Flex alignItems="center" py="5" m="2">
          <Heading my="30px" p="30px">
            KickBoxing, BJJ & MMA
          </Heading>
          <Spacer></Spacer>
          <Box m="2" border="2px solid rgb(8 145 178)" borderRadius="5px">
            <Text bg="rgb(8 145 178)" color="white">
              連絡先
            </Text>
            <dt>先生A: 000-xxxx-xxxx</dt>
            <dt>先生B: 000-xxxx-xxxx</dt>
            <Text bg="rgb(8 145 178)" color="white">
              アクセス
            </Text>
            <dt>XX駅徒歩5分</dt>
          </Box>
        </Flex>
        <Text marginLeft="20px" color="blue.600">
          ～秋の入会キャンペーン～ ★『入会金0円』 ★『月会費2ヶ月分0円』
          ★『Teeシャツプレゼント』 キャンペーンをやります！
          ダイエットが続かない人に最適
          フィットネスジムに、通ってるけど成果がでない
          この機会に是非、キックボクシング、mma、フィジカルトレーニングを体験してみませんか？
          まずは見学、体験から気軽に参加してみてください！
        </Text>
      </Container>
      <Flex alignItems="center" py="10px" bg="gray.300" m="2">
        <Box mr={7}>
          <Image
            src="https://gogen-yurai.jp/wp-content/uploads/2003/11/221686227_675.jpg"
            margin="1"
            alt="Image Alt Text"
            className="classImage"
            borderRadius="xl"
          />
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold" color="blue.800">
            ～秋の入会キャンペーン～
          </Text>
          <Text color="blue.600">
            <p>★『入会金0円』</p>
            <p>★『月会費2ヶ月分0円』</p>
            <p>★『Teeシャツプレゼント』 キャンペーンをやります！</p>
          </Text>
        </Box>
      </Flex>
    </>
  );
}
