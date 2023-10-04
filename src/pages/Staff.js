import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const schduleBoxStyles = {
  bg: "gray.100",
  h: "200px",
  border: "1px solid"
};
export default function Staff() {
  return (
    <SimpleGrid bg="gray.300" spacing="1" minChildWidth="100px" p="5px">
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
    </SimpleGrid>
  );
}
