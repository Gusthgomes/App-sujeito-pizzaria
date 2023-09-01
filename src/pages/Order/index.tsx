import React from 'react';
import { View, Text, StyleSheet} from 'react-native'

export default function Order(){
    return(
        <View style={styles.container}>
            <Text>
                Página de pedidos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1d1d2e"
    }
})