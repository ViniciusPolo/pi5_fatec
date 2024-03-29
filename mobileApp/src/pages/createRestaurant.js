import React, { useState, useCallback, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import { StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import api from '../services/api';

import storageImage from '../services/storage'

import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import DocumentPicker from "react-native-document-picker";

import Upload from "../components/upload";

import NativeUploady, {
  UploadyContext,
  useItemFinishListener,
  useItemStartListener,
  useItemErrorListener,
} from "@rpldy/native-uploady";

const CreateRestaurant = () => {
    const [restaurantName, setRestaurantName] = useState('')
    const [logo, setLogo] = useState('')
    const [logoUrl, setLogoUrl] = useState('')
    const [address, setAddress] = useState('')
    const [bio, setBio] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigation = useNavigation();
    const route = useRoute();
    const { userOwner } = route.params;
    
    const handleCreate = async  () => {
        try {
            setLoading(true)
            if (restaurantName && userOwner){

                const log = await api.createRestaurant({
                    user_owner: userOwner,
                    restaurant_name: restaurantName,
                    bio: bio,
                    logo: '',
                    address: '',
                })
                const data = log;
                
                if (data) {
                    await storageImage.saveImage(logo, `restaurant_id_${data.restaurants.id + 1}`)
                    
                    const imagemRef = ref(storage, `restaurant_id_${data.restaurants.id + 1}`)
                    const url = await getDownloadURL(imagemRef)
                    
                    await api.editLogoRestaurant({
                        logo: url,
                    })
                    setLoading(false)
                    Alert.alert('Restaurante Criado');
                    navigation.navigate("managerRestaurant")
                } else {
                    console.error("API ERROR", data.error);
                    setLoading(false)
                    navigation.navigate("managerRestaurant")
                }
            } else {
                Alert.alert('Estão faltando informações, por favor preencha corretamente');
                setLoading(false)
                return
            }
        } catch (error) {
            Alert.alert('Restaurante não cadastrado, verifique as informações');
        }
    }  

    const handleUpload = async () => {
        try {
            
        } catch (error) {
            
        }
    }  

    return (
        <View style={styles.container}>
            {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <>
            <TextInput 
                    style={styles.input}
                    placeholder="Nome do Restaurante"
                    value={restaurantName}
                    onChangeText={setRestaurantName}
                />
    
                <TextInput 
                    style={styles.input}
                    placeholder="Descrição"
                    value={bio}
                    onChangeText={setBio}
                />
    
                <TextInput 
                    style={styles.input}
                    placeholder="Endereço"
                    value={address}
                    onChangeText={setAddress}
                    />   

                <NativeUploady>
                    <Upload 
                        setLogo={setLogo}
                    />
                </NativeUploady>
    
                <TouchableOpacity style={styles.button} onPress={handleCreate}>
                    <Text style={styles.buttonText}>Criar Restaurante</Text>  
                </TouchableOpacity>
            </>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffa500',
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
    inputPicker: {
        borderWidth: 1,
        borderColor: '#003',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '140%',
      },
    button:{
      backgroundColor: '#FFA500',
      borderRadius: 5,
      marginTop: 10,
      padding: 10,
      width:'80%',
      alignItems: 'center',
    },
    buttonText:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 20,
    },
})
   
export default CreateRestaurant;