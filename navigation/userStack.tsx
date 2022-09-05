import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createStackNavigator();

export default function userStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}