import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View>
            <Text style={styles.header}>Shopping Cart</Text>
            <View style={styles.bar}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginLeft:10,
        fontSize: 30,
        color: "black",
        marginTop: 10,
        top: 10
    },
    bar: {
        width: "95%",
        color: "grey",
        height: 1,
        borderWidth: 1,
        marginTop: 20,
        alignSelf: "center"

    }
})