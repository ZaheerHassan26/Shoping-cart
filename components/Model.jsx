import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';


export default function Model({isactive, notactive,Item,navigation}) {

  return (
    <View>
      <Modal
        transparent={true}
        visible={isactive}
        style={{flex: 1, justifyContent: 'flex-end'}}
        animationType="slide">
        <StatusBar
          backgroundColor={'#000000aa'}
          barStyle={'dark-content'}></StatusBar>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#000000aa',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 350,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                marginLeft: 25,
                marginTop: 15,
                top: 10,
              }}>
              My Cart
            </Text>
            <View style={styles.bar}></View>
            <ScrollView>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image
                    source={require('../app/src/image/product1.png')}
                    style={{width: 80, height: 100, top: 20, marginLeft: 18,marginBottom:20}}
                  />
                  <View>
                    <View style={{marginTop:24}}>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 15,
                          color: 'black',
                        }}>
                        {Item.title}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 13,
                          color: 'black',
                        }}>
                        {`Total item:${Item.Quan}`}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 15,
                          color: 'black',
                          top: 32,
                        }}>
                        ${Item.totalPrice}
                      </Text>
                    </View>
                  </View>
                </View>
              <Pressable style={styles.button} onPress={()=>{notactive,navigation.navigate("Checkout-Screen")}}>
                <Text style={{color:"white"}}>Checkout</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: '95%',
    color: 'grey',
    height: 1,
    borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
  },
  dec: {
    color: 'grey',
    fontSize: 15,
    bottom: 10,
    alignSelf: 'flex-end',
    right: 14,
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    height: 40,
    borderRadius: 20,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
