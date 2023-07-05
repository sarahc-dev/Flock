import { View, Animated } from "react-native";
import FlashCard from "./FlashCard";

const FlashCardContainer = ({ card, nextCard, activities, addChoice }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Animated.View>
                <FlashCard card={card} activities={activities} nextCard={nextCard} addChoice={addChoice} />
            </Animated.View>
        </View>
    );
};

export default FlashCardContainer;
