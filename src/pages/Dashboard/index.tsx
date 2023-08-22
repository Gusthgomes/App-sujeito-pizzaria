import React, { useState, useContext } from "react";
import { View, Text, Button } from 'react-native';
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard(){
    const { signOut } = useContext(AuthContext);
    return(
        <View>
            <Text>
                Dashboard
            </Text>
            <Button
                title="Logout"
                onPress={signOut}
            />
        </View>
    )
}