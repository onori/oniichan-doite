import { Box, Center, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Header() {
  return (
    <Box w="100%" py={2} boxShadow="md">
      <Container maxW="container.xl">
        <Flex>
          <Image src="/images/logo.svg" width={150} height={60} alt="ロゴ" />
        </Flex>
      </Container>
    </Box>
  );
}
