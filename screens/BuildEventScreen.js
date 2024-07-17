import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import DB from "../FireStoreDb";

const BuildEventScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    if (title && description && imageUrl && date) {
      const documentData = {
        title,
        description,
        imageUrl,
        date: new Date(date),
      };
      try {
        const docId = await DB.addNewDocument("cards", documentData);
        Alert.alert("Success", `Document added with ID: ${docId}`);
        navigation.navigate("Home");
      } catch (e) {
        Alert.alert("Error", "Failed to add document");
      }
    } else {
      Alert.alert("Error", "Please fill all the fields");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default BuildEventScreen;
