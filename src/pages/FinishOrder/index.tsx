import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

export default function FinishOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você deseja finalizar esse pedido ?</Text>
      <Text style={styles.table}>Mesa 45</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.theEnd}>Finalizar pedido</Text>
        <Feather name="shopping-cart" size={20} color="#1d1d2e" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e2e",
        paddingHorizontal: '5%',
        paddingVertical: '4%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
        marginBottom: 12
    },
    table: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12,
        color: "#fff",
    },
    button:{
        backgroundColor: "#3ffaa3",
        flexDirection: 'row',
        width: '65%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 20
    },
    theEnd: {
        fontSize: 18,
        marginRight: 8,
        fontWeight: 'bold',
        color: "#1d1d2e"
    },
})