import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Totalprice({price}) {
    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.price}>Totalprice</Text>
            <Text style={styles.amount}>${price}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    price: {
        marginTop: 20, marginLeft: 25, fontSize: 20, color: "black",
    },
    amount:{
        marginTop: 20,fontSize: 20, color: "black",marginRight:30
    }
})