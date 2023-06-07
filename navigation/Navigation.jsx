import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mainscreen from '../app/src/screen/Mainscreen';
import Itemscreen from '../app/src/screen/Itemscreen';
import Checkout from '../app/src/screen/Checkout'

const Stack=createNativeStackNavigator()

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Main-Screen'>
        <Stack.Screen name='Main-Screen' component={Mainscreen}/>
        <Stack.Screen name='Item-Screen' component={Itemscreen}/>
        <Stack.Screen name='Checkout-Screen' component={Checkout}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})