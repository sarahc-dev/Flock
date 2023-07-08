import { useEffect, useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text } from "react-native"

export default function Event() {
    const { id } = useLocalSearchParams();
    const [data, setData] = useState()

    useEffect(() => {
        if (id) {
            fetch(`http://192.168.0.19:8080/event/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
        }
    }, [id])

    return (
        <SafeAreaView>
        <Text>Dynamic event page - {id}</Text>
        {data && <Text>{data.eventName}</Text>}
        </SafeAreaView>
    )
}