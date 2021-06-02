// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';
import { View, Button, StyleSheet, Image,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/BG.jpg')} />

      <Text style = {styles.title}>
        MEMBERS: {'\n\n'}
      </Text>
      <Text style = {styles.text2}>
         ALONZO, KAYCELINE
      </Text>

      <Text style = {styles.text2}>
        ESPERANZATE, EDMARK
      </Text>

      <Text style = {styles.text2}>
        ROCILLO, STEPHEN
      </Text>

      <Text style = {styles.text2}>
        VIRAY, LAARNY
      </Text>

      <AntDesign.Button
        name="back"
        size={24}
        color="white"
        backgroundColor="#CE917B"
        onPress={() => navigation.goBack()} >
        GO BACK HOME
      </AntDesign.Button>
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

  text2:{
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Cochin",
    fontWeight: "bold",
    color:'#ff5535',
    fontSize: 18,
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
