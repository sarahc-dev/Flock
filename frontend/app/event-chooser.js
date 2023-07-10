import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FlashCardContainer from "../components/FlashCardContainer";
import { useEffect, useState } from "react";
import MatchResults from "../components/MatchResults";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownMenu from "../components/DropdownMenu";
import { IP } from "@env";

export default function Home() {
    const [card, setCard] = useState(0);
    const [user, setUser] = useState(1);
    const [results, setResults] = useState(false);
    const [selectedName, setSelectedName] = useState("");
    const [dropdownOptions, setDropDownOptions] = useState([])

    const [choices, setChoices] = useState([]);
    const activities = ["go for a walk", "eat pizza", "dance party", "have a conversation", "base jumping"];


    useEffect(() => {
      fetch(`http://${IP}:8080/event/64ac02a6d8f4e024dc9fa59b`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
        })
        .then(response => response.json())
        .then(data => {
          const updatedOptions = data.names.map(user => ({
            label: user.name,
            value: user.name
        }));

        console.log(updatedOptions)
            
          setDropDownOptions(updatedOptions);
        })
        .catch(error => {
          console.error(error);
        });
    }, [])

    const addChoice = choice => {
        setChoices([...choices, choice]);
    };
    console.log(choices);

    const generateMatches = () => {
        let activityCount = {};
        activities.forEach(activity => {
            activityCount[activity] = 0;
        });
        choices.forEach(choice => {
            activityCount[choice] += 1;
        });
        return Object.keys(activityCount).filter(activity => {
            return activityCount[activity] == 2;
        });
    };

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
                setResults(true);
            } else {
                setCard(card + 1);
            }
        }
    };

    return (
        <SafeAreaView>
            {/* <View> */}

            {results ? (
                <MatchResults choices={generateMatches()} />
            ) : (
                <>
                    <View>
                        <DropdownMenu selectedName={selectedName} setSelectedName={setSelectedName} dropdownOptions={dropdownOptions} />
                    </View>
                    <View style={styles.container}>
                        <FlashCardContainer card={card} nextCard={nextCard} activities={activities} addChoice={addChoice} />
                        {/* <StatusBar style="auto" /> */}
                    </View>
                </>
            )}
            {/* </View> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#fff",
    },
    link: {
        // marginBottom: "10%",
        // marginLeft: "10%",
    },
});
