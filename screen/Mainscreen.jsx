import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import React from 'react';
import Header from '../../../components/Header';
import { observer } from 'mobx-react';
import Estore from '../../../components/Mobexstore';

Mainscreen = observer(({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', display: 'flex', flex: 1 }}>
      <Header />
      <ScrollView style={{ marginBottom: 5 }}>
        {Estore.listItem.map((item, index) => (
          <View key={index}>
            <Pressable
              onPress={() => {
                navigation.navigate('Item-Screen', { id: item.id });
              }}>
              <View style={{ backgroundColor: 'white' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Image
                    source={require('../image/download.jpeg')}
                    style={{ width: 80, height: 120, top: 20, marginLeft: 18 }}
                  />
                  <View>
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 20,
                          color: 'black',
                          marginTop: 17,
                        }}>
                        {item.title}
                      </Text>
                      <Text style={styles.price}>${item.price}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
            <View style={styles.bar}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({

  bar: {
    width: '90%',
    color: 'grey',
    height: 1,
    borderWidth: 0.5,
    marginTop: 40,
    alignSelf: 'center',
  },
  price: {
    marginLeft: 15,
    fontSize: 17,
    color: 'black',
    marginTop: 50,
    top: 12,
  }
});

export default Mainscreen;
