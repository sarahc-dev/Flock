import { useEffect, useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { Link } from "expo-router"
import { IP } from "@env"
import ListItem from "../../components/ListItem";
export default function Result(props) {
    const { id } = useLocalSearchParams();
    const activities = ["go for a walk", "eat pizza", "dance party", "have a conversation", "base jumping"];
    const [data, setData] = useState({names: [{name: 'john', choices: ['asda']}, {name: 'jim', choices: ['asda']}], activities })
    const [isComplete, setIsComplete] = useState(false)
    // const { activities} = props
    
    // {_id: udfuadfa, names: [userObject], activities: [], eventName: "something"}

    // {name: "Sarah", choices: ["dnfsdf", "dfss"]}

    // What if said no to all choices

    // isComplete? Has each person got an array of choices?
    // either include no choices or a default option if no choices

    // useEffect(() => {
    //     if (id) {
    //         fetch(`http://${IP}:8080/event/${id}`)
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //     }
    // }, [id])

    useEffect(() => {
        
        console.log(data)
        const filteredData = data.names.filter((user) => {
           return user.choices.length === 0
        })
        console.log(filteredData);
        (filteredData.length === 0) ? setIsComplete(true) : console.log('waiting') 
          console.log(isComplete)
    }, [data])

       
    if (!isComplete) {
    return (
      <SafeAreaView>
           <Text>waiting</Text>
          <Text>Dynamic result page </Text> 
              <Text>{data.eventName}</Text>
        

        <View>
            <Link href="/">Go Home</Link>
        </View>
        </SafeAreaView>
    )
      }

    return (
  
        <SafeAreaView>
           <Text>wait</Text>
          <Text>Dynamic result page </Text> 
              <Text>{data.eventName}</Text>
              <FlatList
              data={data.activities}
              renderItem={({item}) => (
            <ListItem activity={item} />)}
        />
        

        <View>
            <Link href="/">Go Home</Link>
        </View>
        </SafeAreaView>
    )
}