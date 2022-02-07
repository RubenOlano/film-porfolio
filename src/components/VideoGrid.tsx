import { Grid, Center, Box } from "@chakra-ui/react";
import React from "react";

const vids: string[] = [
  "https://player.vimeo.com/video/390738442?h=2d55eb9091",
  "https://player.vimeo.com/video/390662855?h=eb048802d8",
  "https://player.vimeo.com/video/379630067?h=1d40999634",
  "https://player.vimeo.com/video/368944629?h=dce3a2371d",
];

const VideoGrid = () => {
  return (
    <Center p={3}>
      <Box bg="purple.700" p={3} borderRadius="10px">
        <Grid gap={1} templateColumns="repeat(2, auto)">
          {vids.map((item) => (
            <iframe
              key={item}
              title="vimeo-player"
              frameBorder="0"
              allowFullScreen
              src={item}
            />
          ))}
        </Grid>
      </Box>
    </Center>
  );
};

export default VideoGrid;
