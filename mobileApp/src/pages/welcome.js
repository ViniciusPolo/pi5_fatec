import React, { useEffect, useState } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";


import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {

    const navigation = useNavigation();







    return (

        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../assets/logo1.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} >
                <Text style={styles.title}>Bem vindo ao APP</Text>
                <Text style={styles.text}>Seus restaurantes favoritos em um só lugar</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('createAccount')}
                    style={styles.button1}
                >
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>

            </Animatable.View>


        </View>
    )
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500'
    },
    containerLogo: {
        flex: 1.5,
        backgroundColor: '#FFA500',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign: 'center',
        color: '#000'
    },
    text: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        position: 'relative',
        backgroundColor: '#000000',
        top: 20,
        borderRadius: 50,
        paddingVertical: 12,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button1: {
        position: 'relative',
        backgroundColor: '#000000',
        top: 40,
        borderRadius: 50,
        paddingVertical: 12,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }

})