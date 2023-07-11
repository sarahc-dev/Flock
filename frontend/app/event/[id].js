import { useEffect, useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text, View } from "react-native";
import { Link } from "expo-router"
import { IP } from "@env"
import Header from "../../components/Header";

export default function Event() {
    const { id } = useLocalSearchParams();
    const [data, setData] = useState()

    useEffect(() => {
        if (id) {
            fetch(`http://${IP}:8080/event/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
        }
    }, [id])

    return (
        <SafeAreaView>
        <Header name={'Events'} />
        <Text>Dynamic event page - {id}</Text>
        {data && <Text>{data.eventName}</Text>}

        <View>
            <Link href="/">Go Home</Link>
        </View>
        </SafeAreaView>
    )
}