import { Blockquote, Link, Flex, Box, Image } from "rebass";
import "isomorphic-unfetch";

const HomePage = ({ quote, character, image }) => (
  <Flex p={[2, 4]}>
    <Box width={[1]} p={4} bg="#A0A0B3">
      <Blockquote fontSize={3} py={4}>
        "{quote}"
        <p style={{ fontStyle: "normal", fontWeight: "bold" }}>- {character}</p>
      </Blockquote>
      <Image src={image} />
    </Box>
  </Flex>
);

HomePage.getInitialProps = async ({ req }) => {
  const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
  const json = await res.json();
  const { quote, character, image } = json[0];
  return {
    quote,
    character,
    image
  };
};

export default HomePage;
