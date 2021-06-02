// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState([]);
  const itemInput = (enterText) => {
    setText1(enterText);

  console.log(this.item);
  this.item = "";

  };

  const addItemHandler = () => {
    setText2((currentText1) => [...currentText1, { value: text1}]);
    setText1('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        
        <TextInput
          placeholder="Enter Item"
          style={styles.inputTextBox}
          onChangeText={itemInput}
          value={text1}
          ref={(clear) => (this.item = clear)}
        />
        

        <Button title="ADD" 
          style={styles.button}
          onPress={addItemHandler} 
        />
        
      </View>

        <FlatList 
          data = {text2}
          renderItem = {itemData => (
            <View style = {styles.itemList}>
              <Text>{itemData.item.value}</Text>
            </View>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 50,
    flex: 1,
    backgroundColor: '#6AE2A7',
    borderColor: 'green',
    border: '20px double',
    alignItems: 'center',
    
  },

  inputContainer: {
    flexDirection: 'row',
  },
  
  inputTextBox:{
    width: 145,
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: '#78FFBC',
    font: 'bold 12px Georgia, sans-serif',

  },
  button:{
    width: 100,
    marginRight: 5,
    backgroundColor: '#black'
  },

  itemList:{
    padding: 10,
    marginTop: 10,
    width: 195,
    borderWidth: 3,
    borderColor: '#78FFBC',
  }
  
});
