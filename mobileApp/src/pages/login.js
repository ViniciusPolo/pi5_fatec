import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const handleLogin = () => {
        if(username === '' && password === ''){
            navigation.navigate('home')
        }else{
            alert ('Usuário ou senha inválidos!')
        }

    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUserName}
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
})
   
export default Login;