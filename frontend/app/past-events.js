import { useState, useEffect } from "react";
import { Text, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { SIZES } from "../styles/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from "expo-router"

export default function PastEvents() {
  const [pastEvents, setPastEvents] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('pastEvents');
        if (value !== null) {
          setPastEvents(JSON.parse(value))
        }
      } catch (e) {
        console.error(e);
      }
    }
    getData()
  }, [])
    
    return (
      <SafeAreaView style={styles.container}>
        <Header name={'Past Events'} />
        <View style={{ padding: SIZES.medium }}>
          <Text style={styles.header}>Past Events</Text>
          {pastEvents && <FlatList data={pastEvents} renderItem={({item}) => (
            <View style={{ backgroundColor: '#FED049', padding: 16, borderRadius: 5, marginBottom: 16, marginHorizontal: 16 }}>
              <Link href={`/result/${item.id}`} style={{fontSize: 24}}>
                {item.eventName}
              </Link>
            </View>
          )} /> }
          
        </View>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      marginBottom: 60
    },
    header: {
      fontSize: 24, 
      fontWeight: 600, 
      marginBottom: 16
  },
  })