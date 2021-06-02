// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import About from '../screens/About';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={{
          title: 'ABOUT',
          headerStyle: {
            backgroundColor: '#CE917B',},
           }}/>
    </Stack.Navigator>
  );
};

export default AboutStack;
