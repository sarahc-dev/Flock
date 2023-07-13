import { Text, View, StyleSheet } from "react-native";

export default function NoMatches() {
  return (
    <View style={{ backgroundColor: '#68B984', padding: 16, borderRadius: 5, marginBottom: 16 }}>
      <Text style={{fontSize: 24}}>Waiting for Matches</Text>
    </View>
  )
}
