import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import FlashCardContainer from "../../components/FlashCardContainer";
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import DropdownMenu from "../../components/DropdownMenu";
import { IP } from "@env";
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "../../components/Header";

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
            await AsyncStorage.setItem('pastEvents', data)
          }
        } catch (e) {
          // error reading value
          console.log('test error')
        }
      };

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
      setSelectedUserId(selected._id)
    }

    if (choicesMade) {
        return <Redirect href={`/result/${id}`}/>
    } else {
        return (
            <SafeAreaView>
            <Header name={'Choose Activities'} />
            <Text style={styles.header}>{eventName}</Text>
                {selectedUserId ? (
                    <View style={styles.container}>
                    <FlashCardContainer card={card} nextCard={nextCard} activities={activities} addChoice={addChoice} />
                    </View>
                ) : (
                    <>
                        <View style={styles.container}>
                            <DropdownMenu selectedName={selectedName} setSelectedName={setSelectedName} dropdownOptions={dropdownOptions} />
                            <TouchableOpacity onPress={confirmName} style={styles.button}>
                               <Text style={{fontSize: 16}}>Confirm</Text>
                             </TouchableOpacity>
                        </View>
                    </>
                )}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    header: {
      fontSize: 24, 
      fontWeight: 600, 
      marginBottom: 16,
      padding: 16,
      paddingBottom: 0
  },
  button: {
    backgroundColor: '#68B984',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 16,
  },
});
