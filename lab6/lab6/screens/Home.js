// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Image, Text, Button, Linking,TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Profile from '../screens/Profile';
import { FontAwesome } from '@expo/vector-icons';

const Home= ({ navigation }) => {
    const [data, setData] = useState ([]);
    const [isLoading, setLoading] = useState(true);


    function fetchRandomData() {

        setLoading(true);
        fetch('https://randomuser.me/api')
        .then((response) => response.json())
        .then((json)=> {
          setData(json.results[0]);
          console.log(json.results[0]);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchRandomData();

}, []);



return (
    <View style= {globalStyles.container}>

        { isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : ( 
          <TouchableOpacity onPress={() => navigation.navigate('Profile',data)}>
            <Image style ={globalStyles.picture} source={{uri: data.picture.large}}>
            </Image>
          </TouchableOpacity>

        )}

        { isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : ( 
          <Text style= {globalStyles.text}>{data.name.first} {data.name.last}</Text>
          
        )}
        
          <Button 
          onPress={() => {fetchRandomData();}}
          title="RANDOM USER"
          color="#ff8068" /> 

    </View>
);
};


export default Home;

