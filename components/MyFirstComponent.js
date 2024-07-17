// components/MyFirstComponent.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyFirstComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, this is my first component!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});

export default MyFirstComponent;
