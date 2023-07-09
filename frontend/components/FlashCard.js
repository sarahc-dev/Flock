import { View, Text, TouchableOpacity } from "react-native";

const FlashCard = ({ nextCard, activities, card, addChoice }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <TouchableOpacity testID={"reject-activity"} onPress={nextCard}>
                <Text>No</Text>
            </TouchableOpacity>

            <Text>{activities[card]}</Text>

            <TouchableOpacity
                testID={"accept-activity"}
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
