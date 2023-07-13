import { useEffect, useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router"


export default function NoMatches({eventName, refreshRoute}) {
  return (
    <SafeAreaView>
      <Text style={[styles.item, styles.text]}>waiting for Matches</Text>
      <Text style={[styles.item, styles.text]}>Maybe just stay home </Text> 
      <Text style={[styles.item, styles.text]}> no need to do {eventName}</Text>
      

      <Link href="/">
        <Text style={[styles.item, styles.text]}>Go Home</Text>
      </Link>
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