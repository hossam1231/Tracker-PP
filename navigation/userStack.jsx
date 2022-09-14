import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TrackerScreen from "../screens/Tracker/TrackerScreen";
import TrackerPlayScreen from "../screens/Tracker/TrackerPlayScreen";

const Stack = createStackNavigator();

export default function userStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={TrackerScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Play"
          component={TrackerPlayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
