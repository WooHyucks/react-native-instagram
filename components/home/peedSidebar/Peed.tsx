import { Href, Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export interface PeedData {
  name: string;
  image: any;
  link: Href;
}

export const Peed = ({ name, image, link }: PeedData) => {
  return (
    <Link href={link} asChild>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 8,
  },
  image: {
    width: 70,
    borderRadius: 50,
    height: 70,
    resizeMode: "cover",
  },
  text: {
    fontSize: 12,
    paddingTop: 8,
  },
});
