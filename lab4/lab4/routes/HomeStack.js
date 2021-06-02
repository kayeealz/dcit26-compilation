// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
          title: 'HOME',
          headerStyle: {
            backgroundColor: '#CE917B',
          } }}/>
      <Stack.Screen name="Profile" component={Profile} options={{
          title: 'PROFILE',
          headerStyle: {
            backgroundColor: '#CE917B',
          } }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
