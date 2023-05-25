import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api';

const Login = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [typeOfUser, setTypeOfUser] = useState('')
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();

    const handleLogin = async  () => {
        try {
    
        const log = await api.post(`https://um-trem-de-cume-api.onrender.com/users`, {
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
            Alert.alert('Cadastrado com sucesso', [
                {text: 'Ok', onPress: () => console.log('OK Pressed')},
              ]);
            navigation.navigate("login");
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

    return (
        <View style={styles.container}>
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

            <TextInput 
                style={styles.input}
                placeholder="Tipo de Usuário"
                value={typeOfUser}
                onChangeText={setTypeOfUser}
            />   

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Criar Usuário</Text>  
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