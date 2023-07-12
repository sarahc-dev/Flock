import { Text, SafeAreaView, View } from "react-native";
import Header from "../components/Header";

export default function PastEvents() {
    return (
      <SafeAreaView>
        <Header name={'Past Events'} />
        <View>
          <Text>Past Events</Text>
        </View>
      </SafeAreaView>
    )
  }