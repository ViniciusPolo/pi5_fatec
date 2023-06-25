import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import { StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert } from 'react-native';
import api from '../services/api'; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddMenu = () => {
    const [foodName, setFoodName] = useState('')
    const [price, setPrice] = useState('')
    const [prepareTime, setPrepareTime] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigation = useNavigation();
    const route = useRoute();
    const { restaurant } = route.params;
    
    const handleCreate = async  () => {
        await AsyncStorage.setItem("id_user", JSON.stringify(restaurant.user_owner))
        try {
            if (!foodName || !price || !prepareTime){
                Alert.alert('Estão faltando informações, por favor preencha corretamente');
                setLoading(false)
                return 
            }
            else {
                setLoading(true)
                const log = await api.addMenu({
                    restaurant_id: restaurant.id,
                    food_name: foodName,
                    price: price,
                    prepare_time: prepareTime,
                    ingrediants: '',
                })
                const data = log;
                
                console.log("API ------>", restaurant);
                if (data) {
                    setLoading(false)
                    this.setStorage
                    Alert.alert(`Prato para ${restaurant.restaurant_name} foi criado`);
                    navigation.navigate("managerRestaurant")
                } else {
                    console.error("API ERROR", data.error);
                    setLoading(false)
                    navigation.navigate("managerRestaurant")
                    return
                }
            } 
        } catch (error) {
            Alert.alert('Prato não criado, verifique as informações');
            return
        }
    }   

    return (
        <View style={styles.container}>
            {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <>
            <TextInput 
                    style={styles.input}
                    placeholder="Nome do Prato"
                    value={foodName}
                    onChangeText={setFoodName}
                />
    
                <TextInput 
                    style={styles.input}
                    placeholder="Preço"
                    value={price}
                    onChangeText={setPrice}
                />
    
                <TextInput 
                    style={styles.input}
                    placeholder="Tempo de Preparo (min)"
                    value={prepareTime}
                    onChangeText={setPrepareTime}
                    />
    
                <TextInput 
                    style={styles.input}
                    placeholder="Ingredientes"
                    value={ingredients}
                    onChangeText={setIngredients}
                    />     
    
                <TouchableOpacity style={styles.button} onPress={handleCreate}>
                    <Text style={styles.buttonText}>Criar Prato</Text>  
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
      padding: 20,
      width:'80%',
      alignItems: 'center',
    },
    buttonText:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 20,
    },
})
   
export default AddMenu;

















