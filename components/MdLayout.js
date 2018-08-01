import { Flex, Box } from "rebass";

export default props => (
  <Flex p={[2, 4]}>
    <Box width={[1]} p={4} bg="#A0A0B3">
      <main {...props} />
    </Box>
  </Flex>
);

/* export default props => (
  <main
    {...props}
    style={{
      maxWidth: "50em",
      padding: "1.5em"
    }}
  />
); */
