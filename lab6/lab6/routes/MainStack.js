// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Text, View, Button, StyleSheet,DrawerLay, Image } from 'react-native';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
 

const Drawer = createDrawerNavigator();
  const MainNavigator = () => {

    return (
        <NavigationContainer>
          <Drawer.Navigator drawerContentOptions={{
          activeTintColor: '#e7ab94',
          
          itemStyle: {marginVertical: 5},
          }}>
            <Drawer.Screen name ="Home" component={HomeStack} options={{
            drawerIcon: config => <Ionicons
                name="ios-home"
                color="black"
                size={23}>
                </Ionicons> }} />

            <Drawer.Screen name ="About" component={AboutStack} options={{
            drawerIcon: config => <MaterialCommunityIcons
                size={23}
                color="black"
                name="book-open-outline">
                </MaterialCommunityIcons> }} 
            />
                
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }


export default MainNavigator;


