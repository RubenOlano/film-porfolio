import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Bar from "../components/Bar";
import VideoGrid from "../components/VideoGrid";

const Projects: NextPage = () => {
  return (
    <Box textAlign="center">
      <Bar />
      <Text fontSize="6xl" fontWeight="bold">
        Projects
      </Text>
      <VideoGrid />
    </Box>
  );
};

export default Projects;
