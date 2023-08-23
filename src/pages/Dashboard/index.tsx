import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard(){
    //const { signOut } = useContext(AuthContext);
    const [number, setNumber] = useState('');

    return(
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Novo pedido</Text>

          <TextInput
            style={styles.input}
            placeholder="Número da mesa"
            placeholderTextColor="#f0f0f0"
            keyboardType="numeric"
            value={number}
            onChangeText={setNumber}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.table}>Abrir mesa</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: "#1d1d2e",
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24,
    },
    input:{
        width: '90%',
        height: 60,
        backgroundColor: '#101026',
        borderRadius: 4,
        textAlign: 'center',
        paddingHorizontal: 8,
        fontSize: 22,
        color: '#fff'
    },
    button:{
        width: '90%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    table:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026'
    }
})