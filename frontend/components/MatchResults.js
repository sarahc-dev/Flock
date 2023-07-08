import { ScrollView, Text, SafeAreaView } from "react-native";

export default function MatchResults({ choices }) {
  return (
    <SafeAreaView>
      <Text>Your Matches</Text>
      <ScrollView testID="scroll-view-1">
        {choices.map((match, index) => {
          return <Text key={index}>{match}</Text>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
