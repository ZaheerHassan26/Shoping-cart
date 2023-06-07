import {StyleSheet, Text, View, Image, ScrollView, Pressable} from 'react-native';
import React from 'react';

import Header from '../../../components/Header';
import Totalprice from '../../../components/Totalprice';
import {observer} from 'mobx-react';
import Estore from '../../../components/Mobexstore';
import Footer from '../../../components/Footer';
import Buttons from '../../../components/Buttons';

Checkout = observer(({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header />
      <ScrollView style={{marginBottom: 20}}>
        {Estore.listItem.map((item, index) => (
            <View key={index}>
              <Pressable onPress={()=>navigation.navigate("Item-Screen",{id:item.id})}>
            <View style={{backgroundColor: 'white'}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../image/download.jpeg')}
                  style={{width: 80, height: 120, top: 20, marginLeft: 18}}
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
                    {/* <Text style={styles.finalPrice}>${item.totalPrice}</Text> */}
                  </View>
                </View>
              </View>
            </View>
            </Pressable>
            <Buttons
            //   increase={() => Estore.increase(item.id)}
            //   decrease={() => Estore.Decr(item.id)}
            quan={item.Default}
            />
            <View style={styles.bar}></View>
          </View>
        ))}
        <Totalprice
          price={Estore.listItem.reduce(
            (acc, item) => acc + item.totalPrice,
            0,
          )}
        />
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
    marginTop: 20,
    alignSelf: 'center',
  },
  dec: {
    color: 'black',
    fontSize: 40,
    fontWeight: '700',
    bottom: 14,
    left: 8,
  },
  inc: {
    color: 'black',
    fontSize: 30,
    bottom: 8,
    left: 10,
  },
  Quandiv: {
    marginHorizontal: 250,
    bottom: 18,
    flexDirection: 'row',
    backgroundColor: 'green',
    backgroundColor: '#f5f2e9',
    width: 90,
    height: 30,
    borderRadius: 12,
  },
  price: {
    marginLeft: 15,
    fontSize: 14,
    color: 'black',
    top: 20,
    marginTop:45
  },
  finalPrice: {
    marginLeft: 15,
    fontSize: 15,
    color: 'black',
    marginTop: 30,
    top: 16,
  },
});
export default Checkout;
