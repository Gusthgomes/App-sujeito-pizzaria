import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

type RouteDetailParams = {
    Order:{
        number: string | number;
        order_id: string;
    }
}

type OrderRouteProps = RouteProp < RouteDetailParams, 'Order'>;

export default function Order(){
    const route = useRoute<OrderRouteProps>();
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={ styles.title }>Mesa {route.params.number} </Text>
                <TouchableOpacity>
                    <Feather name='trash-2' size={28} color="#ff3f4b" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.input}>
                <Text style={{color: '#fff'}}>Pizzas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.input}>
                <Text style={{color: '#fff'}}>Pizza de bacon</Text>
            </TouchableOpacity>

            <View style={styles.amount}>
                <Text style={styles.qtd}>Quantidade</Text>
                <TextInput
                 style={[styles.input, {width: '60%', textAlign: 'center'}]}
                 value='10'
                 placeholder='1'
                 placeholderTextColor='#f0f0f0'
                 keyboardType='numeric'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d1d2e",
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        marginTop: 24,
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 14
    },
    input: {
        backgroundColor: '#101026',
        borderRadius: 4,
        width: '100%',
        height: 40,
        marginBottom: 12,
        justifyContent: 'center',
        paddingHorizontal: 8,
        color: '#fff',
        fontSize: 20
    },
    amount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    qtd: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',

    },
})