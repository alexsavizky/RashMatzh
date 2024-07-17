// components/CardComponent.js

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CardComponent = ({ title, imageSource, description, date, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: "#007BFF",
  },
});

export default CardComponent;
