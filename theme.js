import { css } from "styled-components";

// em breakpoints based on Rebass defaults
const sizes = {
  desktop: 80,
  tabletLarge: 64,
  tabletSmall: 48,
  phone: 32
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

// Pass media template via theme object and Styled Components ThemeProvider
const theme = {
  main: "rgba(61, 90, 128, 1)",
  second: "rgba(152, 193, 217, 1)",
  third: "rgba(224, 251, 252, 1)",
  fourth: "rgba(238, 108, 77, 1)",
  fifth: "rgba(41, 50, 65, 1)",
  media: media
};

export default theme;
