import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSytemColorMode: true,
  },
  colors: {
    primary: {
      white: "#FFFFFF",
      whiteDoff: "#EEEEEE",
    },
    secondary: {
      gray: "#A2B0C1",
    },
    fontColor: {
      black: "#1A202C",
      dark: "#2D3748",
    },
  },
};

export default extendTheme(theme);
