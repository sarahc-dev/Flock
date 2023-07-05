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
      <ScrollView>
        {matches.map((match) => {
          return <Text>{match}</Text>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
