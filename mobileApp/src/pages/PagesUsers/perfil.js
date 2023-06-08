import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import api from '../../services/api';


export default function Profile(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();


    useEffect(() => {
        handleListUsers()
    }, [])



    async function handleListUsers() {
        let resp = [];
        let results = [];


        const idUser = props.route.params.user_id

        try {
            resp = await api.listUsers(idUser);
            results = resp.user;

            setName(results.first_name)
            setEmail(results.email)

        } catch (error) {

        }

    }




    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.item}>
                <Image source={{ uri: 'https://i.pravatar.cc/100?img=32' }} style={styles.itemPhoto} />
                <View style={styles.itemInfo}>
                    <Text style={styles.itemP1}>{name}</Text>
                    <Text style={styles.itemP2}>{email}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('home')}>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemP1}>Tipo de usuário</Text>
                    <Text style={styles.itemP2}>empreendedor</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('home')}>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemP1}>menu1</Text>
                    <Text style={styles.itemP2}>descrição menu 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('home')}>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemP1}>menu2</Text>
                    <Text style={styles.itemP2}>descrição menu 2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('home')}>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemP1}>menu3</Text>
                    <Text style={styles.itemP2}>descrição menu 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('welcome')}>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemP1}>Logout</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242425',
    },
    item: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        paddingTop: 15,
        paddingBottom: 15,
    },
    itemPhoto: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    itemInfo: {
        marginLeft: 20,
    },
    itemP1: {
        fontSize: 22,
        color: '#FFFFFF',
        marginBottom: 5
    },
    itemP2: {
        fontSize: 18,
        color: '#999999',
    },
});
