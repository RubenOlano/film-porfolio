import React from "react";
import type { NextPage } from "next";
import Bar from "../components/Bar";
import { Box, Text } from "@chakra-ui/react";
import PhotoGrid from "../components/PhotoGrid";

const Home: NextPage = () => {
  return (
    <Box textAlign="center">
      <Bar />
      <Text fontSize="6xl" fontWeight="bold">
        Images
      </Text>
      <PhotoGrid />
    </Box>
  );
};

export default Home;
