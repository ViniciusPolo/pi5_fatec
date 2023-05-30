import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import { StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert } from 'react-native';
import api from '../services/api';

const CreateAccount = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [typeOfUser, setTypeOfUser] = useState('')
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();

    const handleLogin = async  () => {
        try {
            
            if(email != confirmEmail){
                Alert.alert('Ô sô, esse email não tá batendo');
                return
            } else if (typeOfUser == ''){
                Alert.alert('Eita, Faz favor de iscoiê uma opção');
                return
            } else {

                setLoading(true)
                
                // const log = await api.post(`https://um-trem-de-cume-api.onrender.com/users`, {
                    const log = await api.createUsers({
                first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    type_of_user: typeOfUser,
                    address: {  },
                    documents: {}
                })
                const data = log.data;
                
                if (data) {
                    setLoading(false)
                    navigation.navigate("login");
                } else {
                    console.error("API ERROR", data.error);
                    setLoading(false)
                    navigation.navigate("login");
                }
            }
        } catch (error) {
            Alert.alert('Uai sô', 'Ou um trem ou outro trem ta errado uai', [
                {text: 'Tendinovo', onPress: () => console.log('OK Pressed')},
            ]);
          setLoading(false)
        }
  } 

    return (
        <View style={styles.container}>
            {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <>
            <TextInput 
                style={styles.input}
                placeholder="Primeiro Nome"
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput 
                style={styles.input}
                placeholder="Sobrenome"
                value={lastName}
                onChangeText={setLastName}
            />

            <TextInput 
                style={styles.input}
                placeholder="Email"
                value={confirmEmail}
                onChangeText={setConfirmEmail}
            />

            <TextInput 
                style={styles.input}
                placeholder="Confirme o Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput 
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />     
            <Picker                
                onChanged={setTypeOfUser}                
                options={[
                    {value: '', text: 'Escolha uma opção', enabled:false},
                    {value: 1, text: 'Sou Cliente'},
                    {value: 2, text: 'Tenho um restaurante'},
                    {value: 3, text: 'Sou Entregador'}
                ]}
                style={styles.inputPicker}
                value={typeOfUser}
            />
                


            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Criar Usuário</Text>  
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
      backgroundColor: '#fff',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
    inputPicker: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        marginStart: -20,
        width: '140%',
      },
    button:{
      backgroundColor: '#3498db',
      borderRadius: 5,
      padding: 10,
      width:'80%',
      alignItems: 'center',
    },
    buttonText:{
      color: '#fff',
      fontWeight: 'bold',
    },
})
   
export default CreateAccount;