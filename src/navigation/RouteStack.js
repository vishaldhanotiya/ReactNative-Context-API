import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import Counter from '../screens/useCallback/Counter';
import Home from '../screens/home';
import UseReducer from '../screens/useReducer/index';
import UseContext from '../screens/useContext';
import UseContextImprove from '../screens/useContextImprove';
import AddContact from '../screens/useContextImprove/AddContact';

const Stack = createNativeStackNavigator();

export default function RouteStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="UseReducer" component={UseReducer} />
        <Stack.Screen name="UseContext" component={UseContext} />
        <Stack.Screen name="UseContextImprove" component={UseContextImprove} />
        <Stack.Screen name="AddContact" component={AddContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
