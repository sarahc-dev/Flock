import { ScrollView, Text, SafeAreaView } from "react-native";

export default function MatchResults() {
  const matches = [
    "Picnic in the park",
    "Movie night",
    "Hike",
    "Explore local museums",
  ];

  return (
    <SafeAreaView>
      <Text>Your Matches</Text>
      <ScrollView testID="scroll-view-1">
        {matches.map((match, index) => {
          return <Text key={index}>{match}</Text>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
