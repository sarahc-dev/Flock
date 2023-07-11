import { Link, Stack } from 'expo-router';
import { Image, Text, View } from 'react-native';

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//     />
//   );
// }

export default function Header({name}) {
  return (
    <View style={{}}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: name,
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
          // headerTitle: props => <LogoTitle {...props} />,
        }}
      />
    </View>
  );
}