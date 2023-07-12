import { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator, Image } from "react-native";
import { Link } from "expo-router";
import CreateEvent from "../components/CreateEvent";
import * as Linking from 'expo-linking';
import * as Clipboard from 'expo-clipboard';
import { IP } from "@env";
import { SIZES, BACKGROUNDIMAGE } from "../styles/styles";
import Header from "../components/Header";

export default function NewEvent() {
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([]);
    const [eventName, setEventName] = useState("");
    const [id, setId] = useState("");
    const [link, setLink] = useState("");
    const [locationName, setLocationName] = useState("");
    const [generateButton, setGenerateButton] = useState("Generate Link")

    const nameInput = text => {
        setName(text);
    };

    const addName = () => {
        setNameList([...nameList, name]);
        setName("");
    };

    const removeName = nameToRemove => {
        const filteredNames = nameList.filter(name => name !== nameToRemove);
        setNameList(filteredNames);
    };

    const eventNameInput = text => {
        setEventName(text);
    };

    const locationNameInput = text => {
        setLocationName(text)
    }

    const submitEvent = () => {
        setGenerateButton(<ActivityIndicator color="#000000" />)
        fetch(`http://${IP}:8080/event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ eventName: eventName, names: nameList, location: locationName }),
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                // returns id
                setId(data)
                setLink(Linking.createURL(`/event/${data}`))
            })
            .catch(error => {
                setGenerateButton("Generate Link");
                console.error(error);
            });
    };

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(link)
    }

    return (
        <SafeAreaView style={styles.image}>
            <Header name={'Flock'}/>
        <ScrollView style={{padding: SIZES.medium}}>

           <CreateEvent name={name} nameInput={nameInput} nameList={nameList} eventName={eventName} removeName={removeName} eventNameInput={eventNameInput} addName={addName} locationName={locationName} locationNameInput={locationNameInput}/>
            <View >
                {!id ? <TouchableOpacity onPress={submitEvent} style={styles.button}>
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>{generateButton}</Text>
                </TouchableOpacity> : <><Text style={styles.link}>{`Your link is: ${link}`}</Text>
                <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
                    <Text style={{ fontSize: 16 }}>Click here to copy link</Text>
                </TouchableOpacity>
                <View style={styles.activitiesLink}>
                <Link href={`/event/${id}`} style={{ fontSize: 16 }}>Go to your activities</Link>
                </View>
                
                </>} 
            </View>
            
            </ScrollView>
            <Image source={require('../assets/sheep-and-bird-cropped.png')} style={{  width: 250, height: 230, position: 'absolute', bottom: 0, right: 0 }} />
            <View>
                <Link href="/event-chooser">Choose Activities (next page)</Link>
                <Link href={`/event/${id}`}>Test - Go to Link from within App</Link>
                <Link href={`/result/${id}`}>Test - Go to Link from within App</Link>
                
            </View>
            
            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  image: BACKGROUNDIMAGE,
  button: {
    backgroundColor: '#68B984',
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 5,
    marginTop: 16
  },
  link: {
    fontSize: 16,
    marginTop: 16
  },
  copyButton: {
    fontSize: 16,
    backgroundColor: '#FED049',
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 5,
    marginTop: 8
  },
  activitiesLink: {
    backgroundColor: '#f4511e',
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 5,
    marginTop: 16
  }
})
