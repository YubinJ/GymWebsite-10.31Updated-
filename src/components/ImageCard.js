import { Box, Image, HStack, Tag } from "@chakra-ui/react";

export default function ImageCard() {
  return (
    <Box>
      <Box maxW="420px" bg="white" p="6">
        <Image
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelandleisure.com%2Fthmb%2FLX4znxqtKQYJ3QPu4ArNCuvJw_s%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fseljalandsfoss-iceland-1-WATERFALLS1021-e9c2348a42c841d5b9d661d16dcdcf8c.jpg&tbnid=OGyaSzrbeiDj3M&vet=12ahUKEwiF5c6tsLiBAxU4wDQHHYW8BIYQMygBegQIARB3..i&imgrefurl=https%3A%2F%2Fwww.travelandleisure.com%2Ftrip-ideas%2Fnature-travel%2Fmost-beautiful-waterfalls-in-the-world&docid=-u0A8eIZ153OmM&w=1500&h=1000&q=waterfall&ved=2ahUKEwiF5c6tsLiBAxU4wDQHHYW8BIYQMygBegQIARB3"
          alt="pic"
          borderRadius="xl"
          objectFit="cover"
          mx="auto"
        />
        <HStack>
          {["Wafterfall", "Nature"].map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
