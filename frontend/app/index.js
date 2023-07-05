import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FlashCardContainer from "../components/FlashCardContainer"
export default function Home() {
  

  return (
    <View style={styles.container}>
        <FlashCardContainer/>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
});
