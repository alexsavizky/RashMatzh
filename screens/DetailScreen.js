// screens/DetailScreen.js

import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const DetailScreen = ({ route }) => {
  const { title, imageSource, description, date, moreInfo } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.moreInfo}>{moreInfo}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  content: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: "#007BFF",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  moreInfo: {
    fontSize: 14,
    color: "#333",
  },
});

export default DetailScreen;
