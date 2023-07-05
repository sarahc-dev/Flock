import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FlashCardContainer from "../components/FlashCardContainer"
import { useState } from "react"
export default function Home() {
  const [card, setCard] = useState(0)
  const peopleNum = 2
  const activities = [1,2,3,4,5]
  const nextCard = () => {
    if (card == 4) {
      setCard(-1)
    }
    setCard(card+1);
  }

  return (
    <View style={styles.container}>
        <FlashCardContainer card={card} nextCard={nextCard} peopleNum = {peopleNum} activities={activities}/>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
});
