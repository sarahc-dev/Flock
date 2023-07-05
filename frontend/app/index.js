import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FlashCardContainer from "../components/FlashCardContainer";
import { useState } from "react";
export default function Home() {
    const [card, setCard] = useState(0);
    const [user, setUser] = useState(1);

    const activities = [1, "Go for a walk", 3, 4, 5];
    const nextCard = () => {
        if (user === 1) {
            if (card === 4) {
                setCard(0);
                setUser(2);
            } else {
                setCard(card + 1);
            }
        } else {
            if (card === 4) {
                console.log("reveal results");
            } else {
                setCard(card + 1);
            }
        }
    };

    return (
        <View style={styles.container}>
            <FlashCardContainer card={card} nextCard={nextCard} activities={activities} />
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
