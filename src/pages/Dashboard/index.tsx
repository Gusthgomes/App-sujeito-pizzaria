import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from '@react-navigation/native';
import { StackParamsList } from '../../routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from "../../services/api";

export default function Dashboard(){
    //const { signOut } = useContext(AuthContext);
    const navigation = useNavigation< NativeStackNavigationProp <StackParamsList> >();
    const [number, setNumber] = useState('');

    async function openOrder(){
        if(number === ""){
            alert("Por favor escolha uma mesa!")
            return;
        }

        if(number === '0'){
            alert("Número inválido!")
            return;
        }

        if(number <= "0"){
            alert("Opção inválida!")
            return;
        }

        //precisa fazer a requisição, abria a mesa e navegar para a proxima pagina
        const response = await api.post('/order', {
            table: Number(number)
        })

        navigation.navigate('Order', { number: number, order_id: response.data.id })
        setNumber("");
    }

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
          <TouchableOpacity
          onPress={openOrder}
           style={styles.button}>
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