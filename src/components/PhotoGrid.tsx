import { Flex, Center } from "@chakra-ui/react";
import React, { FC } from "react";
import Photo from "./Photo";
import styles from "./styles/PhotoGrid.module.css";

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
      <Flex bg="purple.700" borderRadius="10px">
        <div className={styles.row}>
          <div className={styles.column}>
            {images.slice(0, 2).map((item) => (
              <Photo key={item.split("/")[3]} imgURL={item} />
            ))}
          </div>
          <div className={styles.column}>
            {images.slice(3, 5).map((item) => (
              <Photo key={item.split("/")[3]} imgURL={item} />
            ))}
          </div>
          <div className={styles.column}>
            {images.slice(6, 7).map((item) => (
              <Photo key={item.split("/")[3]} imgURL={item} />
            ))}
          </div>
          <div className={styles.column}>
            {images.slice(7, 11).map((item) => (
              <Photo key={item.split("/")[3]} imgURL={item} />
            ))}
          </div>
          <div className={styles.column}>
            {images.slice(11, 15).map((item) => (
              <Photo key={item.split("/")[3]} imgURL={item} />
            ))}
          </div>
        </div>
      </Flex>
    </Center>
  );
};

export default PhotoGrid;
