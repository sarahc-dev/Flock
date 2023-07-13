import { useEffect, useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import { FlatList, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { IP } from "@env"
import ListItem from "../../components/ListItem";
import NoMatches from "../../components/NoMatches";
import Header from "../../components/Header";

export default function Result() {
  const { id } = useLocalSearchParams();
  const activities = ["go for a walk", "eat pizza", "dance party", "have a conversation", "base jumping"];
  const [data, setData] = useState({eventName: '', names: ["Tim"], activities: activities})
  const [isComplete, setIsComplete] = useState(false)
  const [matches, setMatches] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect( () => {
    if (id) {
      fetch(`http://${IP}:8080/event/${id}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        const m = generateMatches(data)
        setMatches(m)
        m.length > 0 && setIsComplete(true)
      })
    }
  }, [id, toggle])

  const generateMatches = (data) => {
    const userNumber = data.names.length
    const allChoices = []

    data.names.map(user => {
      allChoices.push(user.choices)
    })

    let activityCount = {};
    data.activities.forEach(activity => {
      activityCount[activity] = 0;
    });

    allChoices.flat().forEach(choice => {
      activityCount[choice] += 1;
    });

    return Object.keys(activityCount).filter(activity => {
      return activityCount[activity] === userNumber;
    })
  };
    
  if (isComplete) {
    return (
      <SafeAreaView>
        <Header />
        <View style={{padding: 16}}>
        <Text style={{fontSize: 24, fontWeight: 600, marginBottom: 16}}>Results for {data.eventName}</Text>

        <FlatList
          data={matches}
          renderItem={({item}) => (
            <ListItem activity={item} />
            )}
            />
        </View>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        
        <View style={{padding: 16}}>
        <NoMatches eventName={data.eventName} refreshRoute={`/result/${id}`}/>
      
        <TouchableOpacity onPress={() => setToggle(!toggle)} style={styles.copyButton}>
          <Text style={{ fontSize: 16 }}>Click here to refresh results</Text>
        </TouchableOpacity>
        </View>
        <ImageBackground source={require('../../assets/sheep-and-bird-large.png')} style={{ width: 330, height: 425, marginTop: 'auto', marginLeft: 'auto', paddingRight: 16}}/>
      </SafeAreaView>
    )
  }
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
  backgroundColor: '#68B984'
  },
  text: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'black'
  },
  copyButton: {
    fontSize: 16,
    backgroundColor: '#FED049',
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 5,
    marginTop: 8
  }
})