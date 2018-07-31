import { Blockquote, Link, Flex, Box } from "rebass";

function HomePage() {
  return (
    <Flex p={[2, 4]}>
      <Box width={[1]} p={4} bg="#A0A0B3">
        <Blockquote fontSize={3} py={4}>
          "Next.js is a minimalistic framework for server-rendered React
          applications."
        </Blockquote>
      </Box>
    </Flex>
  );
}

export default HomePage;
