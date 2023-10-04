import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const schduleBoxStyles = {
  bg: "gray.100",
  h: "25px",
  border: "1px solid",
};
export default function ScheduleForm() {
  return (
    <SimpleGrid
      columns={7}
      bg="gray.100"
      spacing="1"
      p="5px"
      align="center"
      justify="center"
    >
      <Box h="525px" bg="gray.300">
        <Box h="225px" bg="gray.300">
          月曜日
        </Box>
        <Box h="300px" bg="gray.300">
          定休日
        </Box>
      </Box>
      <Box h="525px" bg="gray.300">
        <Box h="175px" bg="gray.300">
          火曜日
        </Box>
        <Box h="150px" bg="yellow.300">
          15:00～18:00
          <br />
          フリークラス
        </Box>
        <Box h="50px" bg="green.300">
          18:00～18:50
          <br />
          キッズクラス
        </Box>
        <Box h="100px" bg="teal.300">
          19:00～21:00
          <br />
          キックボクシング
        </Box>
        <Box h="50px" bg="blue.300">
          21:00～22:00
          <br />
          グラップリング
        </Box>
      </Box>
      <Box h="525px" bg="gray.300">
        <Box h="175px" bg="gray.300">
          水曜日
        </Box>
        <Box h="275px" bg="yellow.300">
          15:00～20:30
          <br />
          フリークラス
        </Box>
        <Box h="75px" bg="cyan.300">
          20:30～22:00
          <br />
          MMAクラス
        </Box>
      </Box>
      <Box h="525px" bg="gray.300">
        <Box h="175px" bg="gray.300">
          木曜日
        </Box>
        <Box h="150px" bg="yellow.300">
          15:00～18:00
          <br />
          フリークラス
        </Box>
        <Box h="50px" bg="green.300">
          18:00～18:50
          <br />
          キッズクラス
        </Box>
        <Box h="100px" bg="teal.300">
          19:00～21:00
          <br />
          キックボクシング
        </Box>
        <Box h="50px" bg="blue.300">
          21:00～22:00
          <br />
          グラップリング
        </Box>
      </Box>
      <Box h="525px" bg="gray.300">
        <Box h="175px" bg="gray.300">
          金曜日
        </Box>
        <Box h="275px" bg="yellow.300">
          15:00～20:30
          <br />
          フリークラス
        </Box>
        <Box h="50px" bg="blue.300">
          20:30～21:30
          <br />
          グラップリング
        </Box>
        <Box h="25px" bg="gray.300"></Box>
      </Box>
      <Box h="525px" bg="gray.300">
        <Box h="25px" bg="gray.300">
          土曜日
        </Box>
        <Box h="75px" bg="pink.300">
          12:00～13:30
          <br />
          レディースキックボクシング
        </Box>
        <Box h="50px" bg="teal.300" fontSize="11px">
          13:30～14:30
          <br />
          初心者キックボクシング
        </Box>
        <Box h="50px" bg="blue.300" fontSize="11px">
          14:30～15:30
          <br />
          初心者グラップリング
        </Box>
      </Box>
      <Box h="525px" bg="gray.300">
        <Box h="25px" bg="gray.300">
          日曜日
        </Box>
        <Box h="50px" bg="green.300">
          12:00～13:00
          <br />
          キッズクラス
        </Box>
        <Box h="50px" bg="pink.300" fontSize="11px">
          13:00～14:00
          <br />
          レディースキックボクシング
        </Box>
        <Box h="125px" bg="purple.700">
          14:00～16:30
          <br />
          柔術クラス
        </Box>
      </Box>
    </SimpleGrid>
  );
}
