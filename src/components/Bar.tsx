import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Bar: React.FC = () => {
  return (
    <Box
      bg="blue.800"
      textAlign="center"
      justifyContent="center"
      height="auto"
      margin={0}
    >
      <Flex marginLeft={6} marginRight={6}>
        <Text my={6} fontSize="xl">
          Ruben Olano
        </Text>
        <Spacer />
        <Stack my={6} direction="row" spacing={6}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Bar;
