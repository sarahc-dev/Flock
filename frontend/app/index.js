import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FlashCardContainer from "../components/FlashCardContainer";
import { useState } from "react";

export default function Home() {
  const [user1Choices, setUser1Choices] = useState([]);
  const [user2Choices, setUser2Choices] = useState([]);
  const activities = [
    "go for a walk",
    "eat pizza",
    "dance party",
    "have a conversation",
    "base jumping",
  ];

  const addUser1Choice = (choice) => {
    setUser1Choices(user1Choices + choice);
  };

  const addUser2Choice = (choice) => {
    setUser2Choices(user2Choices + choice);
  };

  return (
    <View style={styles.container}>
      <FlashCardContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
