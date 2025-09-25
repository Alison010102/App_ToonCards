import { View, Text} from 'react-native'
import React from 'react'
import {HomeStyle} from '../home/homeStyle'
import { StatusBar } from 'expo-status-bar'


const Home = () => {
  return (
      <View style={HomeStyle.container}>
        <StatusBar style="light" />
      <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Home</Text>
    </View>
  )
}



export default Home