import { useEffect, useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router"
import { IP } from "@env"
import ListItem from "../../components/ListItem";
import NoMatches from "../../components/NoMatches";
export default function Result(props) {
    const { id } = useLocalSearchParams();
    const activities = ["go for a walk", "eat pizza", "dance party", "have a conversation", "base jumping"];
    const [data, setData] = useState({eventName: 'the best event' ,names: [{name: 'john', choices: ['go for a walk', 'eat pizza','base jumping']}, {name: 'jim', choices: ['eat pizza', 'base jumping']}, {name: 'john', choices: []}], activities: activities })
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
  const userNumber = data.names.length
  const allChoices = []
  const generateMatches = () => {
      
    data.names.map(user => {
    allChoices.push(user.choices)
   })
  console.log(allChoices)
   let activityCount = {};
   data.activities.forEach(activity => {
       activityCount[activity] = 0;
   });
   allChoices.flat().forEach(choice => {
       activityCount[choice] += 1;
   });
  //  console.log(activityCount)
   return Object.keys(activityCount).filter(activity => {
       return activityCount[activity] === userNumber;
   });
};
    
// console.log(generateMatches())
const matches = generateMatches()
    useEffect(() => {
        console.log(matches)
        matches.length > 0 ? setIsComplete(true) : console.log('waiting');
    }, [data])

    
    if (!matches.length>0) {
    return (
      <NoMatches eventName={data.eventName}/>
    )
      }

    return (
  
        <SafeAreaView>
          <Text style={[styles.item, styles.text]}>Results for {data.eventName}</Text> 
              <FlatList
              data={matches}
              renderItem={({item}) => (
            <ListItem activity={item} />)}
        />
        

        <View>
            <Link href="/">Go Home</Link>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  item:{
  padding:20,
  marginVertical: 8,
  marginHorizontal: 16,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderWidth: 5,
  backgroundColor: 'royalblue'
  },
  text: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'black'
  }
})