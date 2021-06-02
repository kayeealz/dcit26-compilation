import * as React from 'react';
import { Text, View, StyleSheet, Button, Modal, ScrollView, Image } from 'react-native';

const SampleModal= props => {
  return(
    <View style={styles.container}>

    <Modal visible={props.visible}>
    <ScrollView>
    <Image source={require('../assets/spidey.png')} />
    <Text style = {styles.text}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur. Nullam vehicula ipsum a arcu cursus vitae. Ullamcorper velit sed ullamcorper morbi tincidunt. Amet luctus venenatis lectus magna. Viverra tellus in hac habitasse. Arcu odio ut sem nulla pharetra diam sit. Libero justo laoreet sit amet cursus sit amet dictum. Egestas tellus rutrum tellus pellentesque. Nunc eget lorem dolor sed viverra.In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Condimentum id venenatis a condimentum vitae sapien. Amet venenatis urna cursus eget nunc scelerisque. Leo a diam sollicitudin tempor id. Quis imperdiet massa tincidunt nunc pulvinar. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Metus dictum at tempor commodo ullamcorper a lacus. Praesent tristique magna sit amet purus gravida quis. {'\n\n'}Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Ac odio tempor orci dapibus ultrices in. Vitae congue mauris rhoncus aenean vel elit scelerisque. Purus faucibus ornare suspendisse sed nisi lacus. Maecenas ultricies mi eget mauris pharetra. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Pellentesque sit amet porttitor eget dolor. Condimentum id venenatis a condimentum. Nibh ipsum consequat nisl vel pretium. Faucibus turpis in eu mi bibendum neque. {'\n\n'}

Ante metus dictum at tempor commodo. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Ut diam quam nulla porttitor. Tempus iaculis urna id volutpat lacus laoreet. Diam ut venenatis tellus in metus vulputate eu. Donec ultrices tincidunt arcu non sodales neque sodales. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Integer enim neque volutpat ac tincidunt. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Cras sed felis eget velit aliquet sagittis. Ante metus dictum at tempor. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Enim praesent elementum facilisis leo vel fringilla. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Hendrerit gravida rutrum quisque non tellus orci ac. {'\n\n'}

Faucibus pulvinar elementum integer enim neque volutpat. Mollis nunc sed id semper risus in. Risus viverra adipiscing at in tellus integer. Adipiscing elit pellentesque habitant morbi tristique senectus et. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Mi bibendum neque egestas congue quisque egestas. Est ultricies integer quis auctor elit sed vulputate mi. Lorem donec massa sapien faucibus et molestie ac. Fringilla est ullamcorper eget nulla facilisi. Nisi vitae suscipit tellus mauris a diam maecenas. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Tristique et egestas quis ipsum suspendisse ultrices gravida. Purus non enim praesent elementum facilisis. {'\n\n'}

Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Sapien faucibus et molestie ac feugiat sed lectus. Proin libero nunc consequat interdum varius sit amet. Varius duis at consectetur lorem. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Leo in vitae turpis massa sed elementum tempus egestas sed. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Amet commodo nulla facilisi nullam vehicula. Convallis a cras semper auctor neque vitae tempus. Eu facilisis sed odio morbi quis commodo. Egestas integer eget aliquet nibh praesent tristique magna. Purus semper eget duis at tellus. Tortor posuere ac ut consequat semper viverra. Tristique senectus et netus et malesuada fames ac turpis egestas. Id diam vel quam elementum pulvinar etiam non quam.
</Text>

    </ScrollView>
       
    <Button title="Close" onPress={props.onClose}/>
    </Modal>
    </View>
  
    
  );
}
export default SampleModal;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
 text: {
   textAlign: 'justify'
 }
  }


);
