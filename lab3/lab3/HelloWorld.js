// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A9BCF5',
      borderColor: '#045FB4',
      border: '30px double',
    }}>
    
      <Text style= {{
        color: '#0B0B61',
        font: 'bold 20px Georgia, sans-serif'
         }}>
         <Text> HELLO WORLD!</Text>
      </Text>
    </View>
  )
}