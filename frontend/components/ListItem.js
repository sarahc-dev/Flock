import { Text, StyleSheet, View} from "react-native"

const ListItem =({activity})=> {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{activity}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#68B984'
  },
  text: {
    fontSize: 24,
  }
})
export default ListItem