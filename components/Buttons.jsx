import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function Buttons({increase, decrease, quan}) {
  return (
    <View style={styles.Quandiv}>
      <Pressable style={{width: 30, alignItems: 'center'}} onPress={decrease}>
        <Text style={styles.dec}>-</Text>
      </Pressable>
      <Text style={{color: 'black', fontSize: 20}}>{quan}</Text>
      <Pressable style={{width: 30, alignItems: 'center'}} onPress={increase}>
        <Text style={styles.inc}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Quandiv: {
    marginHorizontal: 250,
    bottom: 18,
    justifyContent: 'space-evenly',
    width: 120,
    flexDirection: 'row',
    backgroundColor: '#f5f2e9',
    width: 90,
    height: 30,
    borderRadius: 12,
  },
  dec: {
    color: 'black',
    fontSize: 40,
    fontWeight: '700',
    bottom: 14,
  },
  inc: {
    color: 'black',
    fontSize: 30,
    bottom: 8,
  },
});
