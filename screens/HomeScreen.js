// screens/HomeScreen.js

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Text,
  Button,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import CardComponent from "../components/CardComponent";
import DB from "../FireStoreDb";

const HomeScreen = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "Event"));
        const cardsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: data.date ? data.date.toDate().toDateString() : "", // Convert Firestore timestamp to string
          };
        });
        setCards(cardsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cards: ", error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);
  const handleAddUser = async () => {
    try {
      const userId = await DB.addNewUser({ name: "Alex" });
      Alert.alert("Success", `User added with ID: ${userId}`);
    } catch (e) {
      Alert.alert("Error", "Failed to add user");
    }
  };
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.length === 0 ? (
        <Text style={styles.noDataText}>No cards available.</Text>
      ) : (
        cards.map((card) => (
          <CardComponent
            key={card.id}
            title={card.title}
            imageSource={{ uri: card.imageUrl }}
            description={card.description}
            date={card.date}
            onPress={() =>
              navigation.navigate("Detail", {
                title: card.title,
                imageUrl: card.imageUrl,
                description: card.description,
                date: card.date,
                moreInfo: "Additional details about the card...",
              })
            }
          />
        ))
      )}
      <Button title="Add New User" onPress={handleAddUser} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#999",
  },
});

export default HomeScreen;
