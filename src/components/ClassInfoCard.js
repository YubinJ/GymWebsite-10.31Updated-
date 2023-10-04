import {
  Box,
  Image,
  HStack,
  Tag,
  Center,
  Flex,
  Heading,
  Spacer,
  Link,
  Button,
} from "@chakra-ui/react";

export default function ClassInfoCard(props) {
  return (
    <Center p="2">
      <Box minW="5%" maxW="30rem" p="3" bg="gray.200">
        <Box minW="420px" maxW="800px" p="6" bg="gray.200">
          <Image
            src={props.PICURL}
            alt="pic"
            className="classImage"
            borderRadius="xl"
          />
          <HStack mt="5" spacing="13" bg="gray.300">
            {[[props.Time, props.Instructor]].map((item) => (
              <Tag key={item} variant="outline">
                {item}
              </Tag>
            ))}
          </HStack>
          <Flex p="1">
            <Heading fontSize="xl">{props.className}</Heading>
            <Spacer></Spacer>
            <Link href={`/login`}>
              <Button colorScheme="blue" h="5">
                予約
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}
