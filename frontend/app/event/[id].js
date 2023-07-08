import { useEffect } from "react";
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text } from "react-native"

export default function Event() {
    const { id } = useLocalSearchParams();

    useEffect(() => {
        if (id) {
            fetch(`http://192.168.0.19:8080/event/${id}`)
            .then(response => response.json())
            .then(data => console.log(data))
        }
    }, [id])

    return (
        <SafeAreaView>
        <Text>Dynamic event page - {id}</Text>
        </SafeAreaView>
    )
}