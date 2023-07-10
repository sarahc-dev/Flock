import React from "react"
import { Text, SafeAreaView, StyleSheet, FlatList, View, StatusBar, ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'
const ListItem =({activity})=> {
  // console.log(activity)
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size = {50} color={'black'}/>
      <Text>{activity}</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalBlue'
  },
  item: {
    padding:20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'indianred'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
  fontSize: 15
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})
export default ListItem