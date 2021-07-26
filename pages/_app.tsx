import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Layout from "../components/layout";
const theme = extendTheme({
  fonts: {
    heading: "Noto Sans JP",
    body: "Noto Sans JP",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
