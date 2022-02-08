import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles/Bar.module.css";

const Bar: FC = () => {
  return (
    <Box className={styles.box} bg="blue.800">
      <Flex mx={6}>
        <Text my={6} fontSize="xl">
          <Link href="/">Ruben Olano</Link>
        </Text>
        <Spacer />
        <Stack my={6} direction="row" spacing={6}>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Bar;
