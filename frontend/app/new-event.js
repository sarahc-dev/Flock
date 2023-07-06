import { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native"


export default function NewEvent() {

    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([])

    const nameInput = (text) => {
        setName(text);
    };

    const addName = () => {
        setNameList([...nameList, name]);
        setName('');
        
    }
    useEffect(() => {
        console.log(nameList)
    }, [nameList]) 



    return (
        <SafeAreaView>
          <View>
            <Text>Create Event</Text>
            <TextInput
              placeholder="Enter name and press enter..."
              value={name}
              onChangeText={nameInput}
              onSubmitEditing={() => {
                addName();

              }}
            />

          </View>
        </SafeAreaView>
        
    )
}