import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../shoes';

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>PRODUTOS RELACIONADOS</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/1.png')} cost="119,99">
                            Tênis Nike Air Force 1
                         </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/5.png')} cost="139,99">
                            Tênis Old Skool
                         </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/3.png')} cost="299,99">
                            Tênis Balenciaga
                         </Shoes>
                    </View>

                </ScrollView>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }

});

