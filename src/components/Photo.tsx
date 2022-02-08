import { Container, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import styles from "./styles/Photo.module.css";

interface PhotoProps {
  imgURL: string;
}

const Photo: FC<PhotoProps> = ({ imgURL }) => {
  return (
    <Container className={styles.container}>
      <Image className={styles.image} src={imgURL} alt="photo" />
      <Container className={styles.middle}>
        <Text className={styles.text} padding="16px 32px">
          Hi
        </Text>
      </Container>
    </Container>
  );
};

export default Photo;
