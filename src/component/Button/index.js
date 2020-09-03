import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Button(props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={props.onClick}>
                <Text style={styles.title}>COMPRAR</Text>


            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#FFF'
    }
});