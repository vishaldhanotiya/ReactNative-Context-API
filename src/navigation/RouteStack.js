import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import Counter from '../screens/useCallback/Counter';
import Home from '../screens/home';
import UseReducer from '../screens/useReducer/index';

const Stack = createNativeStackNavigator();

export default function RouteStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="UseReducer" component={UseReducer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
