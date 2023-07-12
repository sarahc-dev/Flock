import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FlashCardContainer from "../../components/FlashCardContainer";
import { useEffect, useState } from "react";
import MatchResults from "../../components/MatchResults";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownMenu from "../../components/DropdownMenu";
import { IP } from "@env";
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const [card, setCard] = useState(0);
    const [selectedName, setSelectedName] = useState("");
    const [dropdownOptions, setDropDownOptions] = useState([])
    const [choices, setChoices] = useState([]);
    const [activities, setActivities] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");
    const [choicesMade, setChoicesMade] = useState(false)
    const [eventName, setEventName] = useState("")

    const { id } = useLocalSearchParams();
    console.log(id)

    useEffect(() => {
      
     if (id) {
      fetch(`http://${IP}:8080/event/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
        })
        .then(response => response.json())
        .then(data => {
          setActivities(data.activities)
          setUsers(data.names)
          setEventName(data.eventName)

          const updatedOptions = data.names.map(user => ({
            label: user.name,
            value: user.name
        }));
          setDropDownOptions(updatedOptions);
        })
        .catch(error => {
          console.error(error);
        });
      }
    }, [id])

    const addChoice = choice => {
        setChoices([...choices, choice]);
    };

    console.log(choices);

    const storeData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('pastEvents');
          const parsedJson = JSON.parse(jsonValue)
          if (Array.isArray(parsedJson)) {
            parsedJson.push({id: id, eventName: eventName})
            const stringifiedJson = JSON.stringify(parsedJson)
            await AsyncStorage.setItem('pastEvents', stringifiedJson)
        } else {
            const data = JSON.stringify([{id: id, eventName: eventName}])
            console.log(`data: ${data}`)
            await AsyncStorage.setItem('pastEvents', data)
          }
        } catch (e) {
          // error reading value
          console.log('test error')
        }
      };

    // const storeData = async () => {
    //     try {
    //       await AsyncStorage.setItem('my-user-id', selectedUserId);
    //     } catch (e) {
    //       // saving error
    //     }
    //   };

    const submitResults = async () => {
        await storeData();
        await fetch(`http://${IP}:8080/user/${selectedUserId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ choices: choices })
        })
    }

    useEffect(() => {
        if(choicesMade) {
            submitResults();
        }
    }, [choicesMade])

    const nextCard = () => {
        if (card === activities.length - 1) {
            setChoicesMade(true)
        } else {
            setCard(card + 1)
        }
    };

    const confirmName = () => {
      const selected = users.filter((user) => user.name === selectedName )[0]
      console.log(selected)
      setSelectedUserId(selected._id)
      console.log(selectedUserId)
    }


    if (choicesMade) {
        return <Redirect href={"/results-page"}/>
    } else {
        return (
            <SafeAreaView>
                {/* <View> */}
    
                {selectedUserId ? (
                    <View style={styles.container}>
                    <FlashCardContainer card={card} nextCard={nextCard} activities={activities} addChoice={addChoice} />
                    {/* <StatusBar style="auto" /> */}
                    </View>
                ) : (
                    <>
                        <View>
                            <DropdownMenu selectedName={selectedName} setSelectedName={setSelectedName} dropdownOptions={dropdownOptions} />
                            <TouchableOpacity onPress={confirmName}>
                               <Text>Confirm</Text>
                             </TouchableOpacity>
                        </View>
                    </>
                )}
                {/* </View> */}
            </SafeAreaView>
        );
    }
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
