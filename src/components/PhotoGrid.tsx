import { Flex, Center, Grid } from "@chakra-ui/react";
import React, { FC } from "react";
import Photo from "./Photo";

const images: string[] = [
  "https://i.imgur.com/UQBT4l9.jpg",
  "https://i.imgur.com/Lm78Tht.jpg",
  "https://i.imgur.com/BPGYbke.jpg",
  "https://i.imgur.com/CgAuYHP.jpg",
  "https://i.imgur.com/vNZSiXV.jpg",
  "https://i.imgur.com/YT9dmjk.jpg",
  "https://i.imgur.com/9AqEAxX.jpg",
  "https://i.imgur.com/r5BSiZQ.jpg",
  "https://i.imgur.com/C8gDvVn.jpg",
  "https://i.imgur.com/0I5YtLK.jpg",
  "https://i.imgur.com/5uMEKxj.jpg",
  "https://i.imgur.com/j03lr7w.jpg",
  "https://i.imgur.com/aNQ5nhi.jpg",
  "https://i.imgur.com/cgi2IK5.jpg",
  "https://i.imgur.com/S42KprS.jpg",
];

const PhotoGrid: FC = () => {
  return (
    <Center p={2}>
      <Grid
        gap={2}
        bg="purple.700"
        borderRadius="10px"
        templateColumns="repeat(3, auto)"
      >
        {images.map((item) => (
          <Photo key={item.split("/")[3]} imgURL={item} />
        ))}
      </Grid>
    </Center>
  );
};

export default PhotoGrid;
