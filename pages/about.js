import React from "react";
import Link from "next/link";
import { withTheme } from "styled-components";
import { Flex, Box, Container, Heading, Text, Button, Card } from "rebass";

const AboutPage = ({ theme }) => (
  <Flex wrap>
    <Box width={[1, 1 / 2, null, 1 / 3]} p={2} bg={theme.fourth}>
      <Card m={3} p={4}>
        <Text my={3} py={2} children="Isn't this great?" />
        <strong>{process.env.SECRET}</strong>
        <Button
          w={[1, null, "7em"]}
          f={[".8em", ".9em", "1em"]}
          color={theme.main}
          bg={theme.third}
          is={Link}
          to="/"
          children="This"
        />
      </Card>
    </Box>
    <Box width={[1, 1 / 2, null, 2 / 3]} p={2} bg={theme.second}>
      <Card m={3} p={4}>
        <Text my={3} py={2} children="Isn't that great?" />
        <Button
          w={[1, null, "7em"]}
          f={[".8em", ".9em", "1em"]}
          color={theme.third}
          bg={theme.fourth}
          is={Link}
          to="/"
          children="That"
        />
      </Card>
    </Box>
  </Flex>
);

export default withTheme(AboutPage);
