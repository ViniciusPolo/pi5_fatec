import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator, ImageBackground, Alert } from 'react-native';
import api from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();

    const handleLogin = async  () => {
      try {
        setLoading(true)
        console.log("teste")
        const log = await api.post(`https://um-trem-de-cume-api.onrender.com/login`, {
          email: email,
          password: password
        })
        const data = log.data;
        console.log("data")

        if (data.auth) {
            setLoading(false)
            navigation.navigate("home");
        } else {
            console.error("API ERROR", data.error);
        } 
      } catch (error) {
        Alert.alert('Uai sô', 'Ou um trem ou outro trem ta errado uai', [
          {text: 'Tendinovo', onPress: () => console.log('OK Pressed')},
        ]);
        setLoading(false)
      }
    }  
    const handleCreateAccount = async  () => {
      navigation.navigate("createAccount");
    }

    return (
        <View style={styles.container}>
          {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <>
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

                <TouchableOpacity style={styles.button} loading={loading} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.auxText} onPress={handleCreateAccount}>Criar Conta</Text>
              </> )
            }
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