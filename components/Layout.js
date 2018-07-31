import React from "react";
import { Provider, Toolbar, Fixed, Container, Panel } from "rebass";
import { injectGlobal } from "styled-components";
import Header from "./Header";
import theme from "../theme";

injectGlobal`
  body {
    background-color: #EFEFF2;
  }
`;

export default ({ children }) => (
  <React.Fragment>
    <Provider>
      <Header />
      <Container maxWidth="51em" pt="2em">
        {children}
      </Container>
      <Fixed right={0} bottom={0} left={0}>
        <Panel.Footer p=".5em" color={theme.main}>
          copyright©2018
        </Panel.Footer>
      </Fixed>
    </Provider>
  </React.Fragment>
);
