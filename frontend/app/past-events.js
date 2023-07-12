import { useEffect } from "react";
import { Text, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { SIZES } from "../styles/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PastEvents() {
  // const fakeData = {
  //   "pastEvents": [{ id: 123, eventName: "Birthday"}],
  // }
  // console.log(JSON.stringify(fakeData))
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('past-events');
        return value !== null ? JSON.parse(value) : null;
      } catch (e) {
        // error reading value
      }
    }
    console.log(getData())
  }, [])

  

    return (
      <SafeAreaView style={styles.container}>
        <Header name={'Past Events'} />
        <View style={{ padding: SIZES.medium }}>
          <Text style={styles.header}>Past Events</Text>
          {/* <FlatList data={fakeData} renderItem={({item}) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.eventName}</Text>
            </View>
            
          )} /> */}
        </View>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      padding: 16
    },
    header: {
      fontSize: 24, 
      fontWeight: 600, 
      marginBottom: 16
  },
  })