import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { useEffect, useState, useRef } from "react";
import { Redirect } from "expo-router";
import DropdownMenu from "../../components/DropdownMenu";
import { IP } from "@env";
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "../../components/Header";
import Swiper from "react-native-deck-swiper";
import { Entypo } from '@expo/vector-icons';

export default function Home() {
    const [selectedName, setSelectedName] = useState("");
    const [dropdownOptions, setDropDownOptions] = useState([])
    const [choices, setChoices] = useState([]);
    const [activities, setActivities] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");
    const [choicesMade, setChoicesMade] = useState(false)
    const [eventName, setEventName] = useState("")

    const swipeRef = useRef(null)

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

    const confirmName = () => {
      const selected = users.filter((user) => user.name === selectedName )[0]
      if (selected) {
        setSelectedUserId(selected._id)
      }
    }

    if (choicesMade) {
        return <Redirect href={`/result/${id}`}/>
    } else {
        return (
            <SafeAreaView style={{flex: 1}}>
            <Header name={'Choose Activities'} />
            <Text style={styles.header}>{eventName}</Text>
                {selectedUserId ? (
                  <View style={{position: 'relative', flex: 1}}>
                    <View>
                    <Swiper 
                    ref={swipeRef}
                    cards={activities} 
                    stackSize={5} 
                    cardIndex={0} 
                    containerStyle={{ backgroundColor: 'transparent'}}
                    verticalSwipe={false}
                    onSwipedAll={() => setChoicesMade(true)}
                    onSwipedRight={(cardIndex) => addChoice(activities[cardIndex])}
                    overlayLabels={{
                      left: {
                        title: "Nope",
                        style: {
                          label: {
                            textAlign: "right",
                            color: "red"
                          }
                        }
                      },
                      right: {
                        title: "Yes",
                        style: {
                          label: {
                            color: "green"
                          }
                        }
                      }
                    }}
                    renderCard={card => (
                        <View style={styles.card}>
                          <Text style={styles.cardText}>{card}</Text>
                        </View>
                    )} />
                    
                    </View>
                    <View style={{paddingHorizontal: 16, paddingBottom: '15%', position: 'absolute', bottom: 0, width: '100%', flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 56}}>
                      <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()} style={{backgroundColor: "#f4511e", padding: 16, borderRadius: 50}}>
                      <Entypo name="cross" size={24} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => swipeRef.current.swipeRight()} style={{backgroundColor: "#68B984", padding: 16, borderRadius: 50}}>
                      <Entypo name="check" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
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
        padding: 16,
    },
    header: {
      fontSize: 24, 
      fontWeight: 600, 
      // marginBottom: 16,
      paddingHorizontal: 16,
      paddingTop: 16,
     
  },
  button: {
    backgroundColor: '#68B984',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 16,
  },
    card: {
      backgroundColor: "#FED049",
      borderRadius: "15px",
      height: "55%",
      padding: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
    shadowOffset: {
        widty: 0,
        height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  cardText: {
      fontSize: 30,
      fontWeight: "600"
  },
});

