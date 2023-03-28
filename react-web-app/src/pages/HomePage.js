import { ChakraProvider, Text } from "@chakra-ui/react";
import Header from "../comps/Header";

function HomePage() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}

export default HomePage;
