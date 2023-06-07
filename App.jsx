import { View } from 'react-native';

import React from 'react';
import Navigation from './android/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import Checkout from './android/app/src/screen/Checkout';


export default function App() {
  return (
    // <View>
    //   <Checkout/>
    // </View>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

