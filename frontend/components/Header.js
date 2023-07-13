import { Link, Stack } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function LogoTitle() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center"}}>
    <MaterialCommunityIcons name="sheep" size={24} color="#FFF9E7" />
    <Text style={{ color: "#FFF9E7", fontWeight: 'bold', fontSize: 20, marginLeft: 8 }}>Flock</Text>
    </View>
  );
}

export default function Header({name}) {
  return (
    <View style={{}}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "",
          
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
    </View>
  );
}