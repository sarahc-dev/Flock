import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FlashCardContainer from "../components/FlashCardContainer";
import { useState } from "react";

export default function Home() {
  const [choices, setChoices] = useState([]);
  const activities = [
    "go for a walk",
    "eat pizza",
    "dance party",
    "have a conversation",
    "base jumping",
  ];

  const addChoice = (choice) => {
    setChoices((prev) => {
      [...prev, choice];
    });
  };

  const nextCard = () => {};

  const generateMatches = () => {
    let activityCount = {};
    activities.forEach((activity) => {
      activityCount[activity] = 0;
    });
    choices.forEach((choice) => {
      activityCount[choice] += 1;
    });
    return Object.keys(activityCount).filter((activity) => {
      return activityCount[activity] == 2;
    });
  };

  return (
    <View style={styles.container}>
      <FlashCardContainer addChoice={addChoice} nextCard={nextCard} />
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
