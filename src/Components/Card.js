import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardContent}>{props.content}</Text>
        <Button title={props.buttonText} onPress={props.onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor:"#FF0000",
        borderRadius: 10,
        padding: 15,
        marginTop: 12,
        elevation: 3,
        shadowColor: "#00",
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10
    }
})