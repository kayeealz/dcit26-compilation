// BSCS 3-3
// ALONZO, KAYCELINE
// ESPERANZATE, EDMARK
// ROCILLO, STEPHEN
// VIRAY, LAARNY

import React, { useState } from 'react';
import { Text, ScrollView, Image, View, TextWith } from 'react-native';
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = ({ route }) => {
  const data = route.params;

  return (
    <View style={globalStyles.container}>
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>USER PROFILE</Text>

        <Image
          style={globalStyles.picture}
          source={{ uri: data.picture.large }}>
          {' '}
        </Image>

        <Text style={globalStyles.text}>
          {' '}
          {data.name.title} {data.name.first} {data.name.last}{' '}
        </Text>
      </View>

      <View style={globalStyles.container2}>
        <View style={globalStyles.iconTitle}>
          <Ionicons name="person-circle-outline" size={18} color="#ff5535" />
          <Text style={globalStyles.text2}> ABOUT</Text>
        </View>

        <View style={globalStyles.text3}>
          <Text> Age: {data.dob.age} </Text>
          <Text> Birthday: {data.dob.date} </Text>
          <Text> Gender: {data.gender} </Text>
          <Text>
            {' '}
            Address: {data.location.street.number} {data.location.street.name}{' '}
            {data.location.street.city} {data.location.street.state}{' '}
            {data.location.street.country}
          </Text>
        </View>

        <View style={globalStyles.iconTitle}>
          <Ionicons name="mail-unread-outline" size={18} color="#ff5535" />
          <Text style={globalStyles.text2}> CONTACT</Text>
        </View>

        <View style={globalStyles.text3}>
          <Text> Email: {data.email} </Text>
          <Text> Phone: {data.phone} </Text>
        </View>

        <View style={globalStyles.iconTitle}>
          <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={19} color="#ff5535" />
          <Text style={globalStyles.text2}> OTHER </Text>
        </View>

        <View style={globalStyles.text3}>
          <Text> Date Registered: {data.registered.date} </Text>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default Profile;
