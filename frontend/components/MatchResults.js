import { ScrollView, Text, SafeAreaView } from "react-native";

export default function MatchResults({choices}) {

  return (
    <SafeAreaView>
      <Text>Your Matches</Text>
      <ScrollView>
        {choices.map((match) => {
          return <Text>{match}</Text>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
