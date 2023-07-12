import { useState, useEffect } from "react" 
import { Text } from "react-native" 
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function NewEvent() {
  const [data, setData] = useState("")

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('pastEvents');
      console.log(value)
      if (value !== null) {
        // value previously stored
        const localData = JSON.parse(value)
        setData(localData);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, [])

  console.log(`data: ${data}`)

  return (
    <SafeAreaView>
      {data && <Text>data[0].eventName</Text>}
    </SafeAreaView>
  )
}