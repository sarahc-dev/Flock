import { View, Text, TouchableOpacity } from "react-native";
import PanGestureHandler from "react-native-gesture-handler";
const FlashCard = ({
  children,
  style,
  activities,
  card,
  addChoice,
  nextCard,
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={nextCard}>
        <Text>No</Text>
      </TouchableOpacity>

      <Text>{activities[card]}</Text>

      <TouchableOpacity
        onPress={() => {
          addChoice(activities[card]);
          nextCard();
        }}
      >
        <Text>Yes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlashCard;
