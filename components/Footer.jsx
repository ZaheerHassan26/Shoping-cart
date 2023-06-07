import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function Footer({navigation}) {
    return (
        <View>
            <Pressable>
                <Text style={styles.button}>Checkout</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.button2}>Checkout with</Text>
            </Pressable>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("Main-Screen")}>
                <Text style={styles.footer}>Continue shopping</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingTop: 8,
        color: 'white',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button2: {
        borderColor: 'black',
        borderWidth: 2,
        paddingTop: 9,
        backgroundColor: 'white',
        color: 'black',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    footer: {
        alignSelf: 'center',
        paddingBottom: 95,
        color: 'black',
        fontSize: 15,
    },
})