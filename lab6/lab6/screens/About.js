// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';
import { View, Button, StyleSheet, Image,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/BG.jpg')} />

      <Text style = {styles.title}>
        OBJECTIVE
      </Text>
      <Text style = {styles.text}>
         At the end of each topic, the students are expected to:
1. Learn how multiple screens work
2. Use Stack and Drawer Navigator
3. Learn how to import component libraries
4. Learn proper code organization of components/screens; and
5. Gain knowledge regarding basics of React Native {'\n\n'}
      </Text>

      <Text style = {styles.title}>
        INSTRUCTION
      </Text>

      <Text style = {styles.text}>
1. Create an app that will showcase the Stack Navigator and Drawer Navigator components.
2. Create three screens (Home, Profile, and About) then link Home and Profile together in a stack and create a separate stack for the About screen.
3. Each screen should contain a button linking to the next or previous page.
4. Finally, use the Drawer Navigator to navigate to the Home and About screen.{'\n\n\n\n'} 
 
      </Text>

      <AntDesign.Button
        name="back"
        size={24}
        color="white"
        backgroundColor="#CE917B"
        onPress={() => navigation.goBack()} >
        GO BACK
      </AntDesign.Button>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB499',
  },

  text:{
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Cochin",
    fontWeight: "bold",
    color:'white',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 30,
  },

  title:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fcf4f2'
  },

  image:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.5
    },
});
