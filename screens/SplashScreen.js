// screens/SplashScreen.js

import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const SplashScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe; // unsubscribe on unmount
  }, []);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setLoading(false);
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Button title="Login with Google" onPress={signInWithGoogle} />
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default SplashScreen;
