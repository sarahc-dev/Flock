import { View, Text, Animated, TouchableOpacity } from "react-native";
import FlashCard from "./FlashCard";
import PanGestureHandler from "react-native-gesture-handler";
import { useState } from "react";
const FlashCardContainer = ({ addChoice, nextCard }) => {
  const [card, setCard] = useState(0);
  const peopleNum = 2;
  const activities = [1, 2, 3, 4, 5];
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Animated.View>
        <FlashCard
          card={card}
          activities={activities}
          addChoice={addChoice}
          nextCard={nextCard}
        ></FlashCard>
      </Animated.View>
    </View>
  );
};

export default FlashCardContainer;
