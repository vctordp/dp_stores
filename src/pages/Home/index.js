import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Dimensions } from 'react-native';

import Shoes from '../../component/shoes';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/banner.jpeg')}
                    style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>DP'STORE</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>70% 0FF</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <Text style={styles.text}>LANÇAMENTOS</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.png')} cost="R$119,99" onClick={() => navigation.navigate('Detail')}>
                        Air Force 1
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} cost="R$119,99" onClick={() => navigation.navigate('Detail')}>
                        Adidas NMD
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/3.png')} cost="R$399,99" onClick={() => alert('Cliclou')}>
                        Tênis Balenciaga
                    </Shoes>
                    <Shoes img={require('../../assets/4.png')} cost="R$299,99" onClick={() => alert('Cliclou')}>
                        Adidas Star
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/5.png')} cost="R$169,99" onClick={() => alert('Cliclou')}>
                        Vans Old Skool
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} cost="R$219,99" onClick={() => alert('Cliclou')}>
                        Yeezy
                    </Shoes>


                </View>


            </ScrollView>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
});