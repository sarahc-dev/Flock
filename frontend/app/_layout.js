import { Stack, Slot } from 'expo-router';
import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons'; 

export default function Layout() {
  return (
    // <Stack title={''}
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}
    // >
    // <Slot />
      <Tabs screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'past-results') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tabs.Screen name="index" options={{ tabBarLabel: "Create Event" }}/>
      <Tabs.Screen name="past-results" options={{ tabBarLabel: "Past Results" }}/>
      <Tabs.Screen
        // Name of the route to hide.
        name="event/[id]"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      <Tabs.Screen
        name="result/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="event-chooser"
        options={{
          href: null,
        }}
      />
    </Tabs>
   
  );
}