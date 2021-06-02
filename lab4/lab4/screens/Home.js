// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';
import { View, Button, StyleSheet, Image,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/BG.jpg')} />

      <Text style = {styles.title}>
        CAVITE STATE UNIVERSITY - MAIN CAMPUS {'\n\n\n'}
      </Text>
      <Text style = {styles.text}>
         DCIT 26 - APPLICATION DEVELOPMENT ANS EMERGING TECHNOLOGIES {'\n\n'}
      </Text>

      <Text style = {styles.title}>
        BSCS 3-3
      </Text>

      <Text style = {styles.text2}>
        LABORATORY #4: NAVIGATION
      </Text>

      <Ionicons.Button
         name="person-circle-outline" 
         size={18} 
         color="white"
        backgroundColor="#CE917B"
        onPress={() => navigation.navigate('Profile')} >
        PROFILE
      </Ionicons.Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB499',
    textAlign: 'center',
  },

  text:{
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Cochin",
    fontWeight: "bold",
    color:'white',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 30,
  },

  text2:{
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Cochin",
    fontWeight: "bold",
    color:'#ff5535',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 30,
  },

  title:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
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
