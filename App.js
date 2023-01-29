import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import PlayerScreen from './src/PlayerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        showHideTransition={'slide'}
        hidden={false}
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        initialRouteName="PlayerScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="PlayerScreen"
          component={PlayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
