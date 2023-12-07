import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AllScreens from './AllScreens';
import Home from '../screens/HomePage/HomePage';
import MapView from '../screens/MapScreen/MapView';

const Stack = createStackNavigator();

const allStack = [
  {
    name: AllScreens.home,
    component: Home,
  },
  {
    name: AllScreens.map,
    component: MapView,
  },
];

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AllScreens.home}
        screenOptions={{headerShown: false}}>
        {allStack.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
