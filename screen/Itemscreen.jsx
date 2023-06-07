import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {observer} from 'mobx-react';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Model from '../../../components/Model';
import Estore from '../../../components/Mobexstore';

Itemscreen = observer(({route, navigation}) => {
  const [isactive, setisactive] = useState(false);

  const id = route.params.id;
  const Item = Estore.listItem.find(val => val.id === id);

  return (
    <View style={{backgroundColor: 'white', display: 'flex', flex: 1}}>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <AntDesign
        onPress={() => {
          navigation.goBack();
        }}
        name="arrowleft"
        style={{color: 'black', top: 20, marginLeft: 8}}
        size={25}
      />
      <ScrollView
        key={id}
        style={{
          display: 'flex',
          marginTop: 20,
        }}>
        <Text style={styles.title}>{Item.title}</Text>
        <Text style={styles.price}>${Item.price}</Text>
        <Image style={styles.image} source={require('../image/product1.png')} />
        <View style={styles.Quandiv}>
          <Pressable
            style={{width: 30, alignItems: 'center'}}
            onPress={() => Estore.Decr(id)}>
            <Text style={styles.dec}>-</Text>
          </Pressable>
          <Text style={{color: 'black', fontSize: 20}}>{Item.Quan}</Text>
          <Pressable
            style={{width: 30, alignItems: 'center'}}
            onPress={() => Estore.increase(id)}>
            <Text style={styles.inc}>+</Text>
          </Pressable>
        </View>
        <Text style={styles.finalPrice}>TotalPrice: ${Item.totalPrice}</Text>
        <Pressable onPress={() => setisactive(true)} style={styles.button}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
            }}>
            Add to cart
          </Text>
        </Pressable>
        <Model
          navigation={navigation}
          isactive={isactive}
          notactive={() => setisactive(false)}
          Item={Item}
        />
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 25,
    marginLeft: 10,
    width: 180,
    marginTop: 25,
    fontWeight: '800',
  },
  price: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    marginTop: 15,
    fontWeight: '600',
  },
  image: {
    borderRadius: 15,
    width: '95%',
    alignSelf: 'center',
    height: 400,
    marginTop: 20,
  },
  Quandiv: {
    marginHorizontal: 18,
    marginTop: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#f5f2e9',
    width: 120,
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
  finalPrice: {
    marginHorizontal: 18,
    fontSize: 15,
    color: 'black',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 30,
    width: '60%',
    alignSelf: 'center',
    textAlign: 'center',
    height: 40,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center',
  },
});
export default Itemscreen;
