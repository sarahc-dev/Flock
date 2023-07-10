import { useEffect, useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { Link } from "expo-router"
import { IP } from "@env"
import ListItem from "../../components/ListItem";
export default function Result(props) {
    const { id } = useLocalSearchParams();
    const [data, setData] = useState()
    // const { activities} = props
    const activities = ["go for a walk", "eat pizza", "dance party", "have a conversation", "base jumping"];
    useEffect(() => {
        if (id) {
            fetch(`http://${IP}:8080/event/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
        }
    }, [id])
    const renderItem = ({activity}) => 
      {console.log(activity)

      return <ListItem activity={activity} />
      }
        console.log(activities)
    return (
        <SafeAreaView>
        <Text>Dynamic result page </Text>
        {data && <><Text>{data.eventName}</Text>
        <FlatList data={activities}
          renderItem={renderItem}
        /></>}


        {/* <FlatList data={weatherData} 
    renderItem={renderItem} 
    keyExtractor={(item)=>item.dt_txt} 
    ItemSeparatorComponent={()=> <View style={{backgroundColor:'blue', height: 2}}/> }
    ListEmptyComponent={<Empty />}  /> */}

        <View>
            <Link href="/">Go Home</Link>
        </View>
        </SafeAreaView>
    )
}