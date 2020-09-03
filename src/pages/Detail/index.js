import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';
import { useLinkProps, useNavigation } from '@react-navigation/native';

export default function Detail({ navigation }) {


    navigation.setOptions({
        headerTitle: 'Tênis Nike Air Force 1'
    })





    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]} > R$119, 99
                </Text>
                </View>
                <View opacity={0.4}></View>
                <Text style={[styles.title, { fontSize: 30 }]} > Tênis Nike Air Force 1
                </Text>

                <View style={styles.dotContainer}>
                    <Dot color="#2379f4" />
                    <Dot color="#fb6e53" />
                    <Dot color="#ddd" />
                    <Dot color="#000" />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor="#17181a" color="#FFF">40</SizeButton>
                        <SizeButton>35</SizeButton>
                        <SizeButton>37</SizeButton>
                        <SizeButton>40</SizeButton>
                    </ScrollView>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Tênis Nike Air Force 1
                    </Text>
                    <Text style={styles.textContent}>
                        A lenda vive no Tênis Masculino Nike Air Force 1 07, uma atualização moderna do icônico AF1 que mistura o estilo clássico com detalhes novos.
                    </Text>
                    <Text style={styles.textList}>
                        -Categoria: Casual
                    </Text>
                    <Text stye={styles.textList}>
                        -Detalhe: Possui bordas em couro
                    </Text>
                </View>



                <Button onClick={() => navigation.navigate('Login')} />

                <View style={styles.line} />


                <Footer />



            </View>


        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'

    },
    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,

    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%',
    }

});
