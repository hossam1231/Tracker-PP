import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import SignOutScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/Tracker/TrackerScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign In"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign Up"
            component={SignOutScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
