import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons'; 

const CreateEvent = ({ name, nameInput, nameList, eventName, addName, removeName, eventNameInput, locationName, locationNameInput }) => {

    return (
        <View>
            <Text style={styles.header}>Create Your Event</Text>
            <Text style={styles.label}>Event Name:</Text>
            <TextInput testID={"event-name-text-input"} placeholder="Enter event name" value={eventName} onChangeText={eventNameInput} style={styles.input} />
            <Text style={styles.label}>Event Location:</Text>
            <TextInput testID={"location-name-text-input"} placeholder="Enter location" value={locationName} onChangeText={locationNameInput} style={styles.input} />
            <Text style={styles.label}>Names:</Text>
            <TextInput
            testID={"name-text-input"}
            placeholder="Enter name and press enter..."
            value={name}
            onChangeText={nameInput}
            onSubmitEditing={() => {
                addName();
            }}
            style={styles.input}
            />
        
            <View testID={"name-list"} style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {nameList.map(name => (
                    <View key={name} testID={"name"} style={styles.nameTag}>
                        <Text testID={"name-text"} style={{ fontSize: 18, marginRight: 2 }}>{name}</Text>
                        <TouchableOpacity testID={"remove-name"} onPress={() => removeName(name)}>
                            <Entypo name="cross" size={18} color="black" />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View> 
    )
}

export default CreateEvent;

const styles = StyleSheet.create({
    header: {
        fontSize: 24, 
        fontWeight: 600, 
        marginBottom: 16
    },
    label: {
        fontSize: 20, 
        marginBottom: 8
    },
    input: {
        fontSize: 20, 
        backgroundColor: 'white', 
        padding: 8, 
        borderRadius: 5, 
        marginBottom: 16
    },
    nameTag: {
        backgroundColor: '#68B984',
        padding: 6,
        borderRadius: 5,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    }
})