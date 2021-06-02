// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet} from 'react-native';

import SampleModal from './components/SampleModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <View style={styles.container}>
      <Button title="CLICK ME" onPress={() => setModalOpen(true)} style={styles.button} />
      <SampleModal visible={modalOpen} onClose={() => setModalOpen(false)}/>  
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    paddingTop: 380, //ayaw po gumana sakin ng center kaya po nagpadding top ako para po sa button
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a2b4e',
    borderColor: 'green',
    border: '20px double',
  },
  button:{
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
