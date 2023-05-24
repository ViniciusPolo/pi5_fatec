import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const handleLogin = async  () => {
        console.log("teste")
        const log = await api.post(`https://um-trem-de-cume-api.onrender.com/login`, {
            email: email,
            password: password
        })
        const data = log.data;

        if (data.auth) {
            navigation.navigate("home");
        } else {
            console.error("API ERROR", data.error);
        } 
    } 

    const handleCreateAccount = async  () => {
      navigation.navigate("createAccount");
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Email"
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>  
            </TouchableOpacity>
            <Text style={styles.auxText} onPress={handleCreateAccount}>Criar Conta</Text> 
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
    auxText:{
      color: '#3498db',
      fontWeight: 'bold',
    },
})
   
export default Login;