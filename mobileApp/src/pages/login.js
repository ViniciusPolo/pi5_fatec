import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator, ImageBackground, Alert } from 'react-native';
import api from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation();

  const handleLogin = async () => {
    setPassword("password")
    setEmail("pedro@silva.com")
    try {
      setLoading(true)
      const log = await api.loginUsers({
        email: email,
        password: password
      })
      const data = log.data;

      if (data.auth) {
        setLoading(false)
        navigation.navigate("home", { user: data });
      } else {
        console.error("API ERROR", data.error);
      }
    } catch (error) {
      Alert.alert('Uai sô', 'Ou um trem ou outro trem ta errado uai', [
        { text: 'Tendinovo', onPress: () => console.log('OK Pressed') },
      ]);
      setLoading(false)
    }
  }

  const handleLoginV2 = async () => {
    try {
      setLoading(true)
      const log = await api.loginUsers({
        email: email,
        password: password
      })
      const data = log.data;

      if (data.auth) {
        setLoading(false)
        navigation.navigate("main", { user: data });
      } else {
        console.error("API ERROR", data.error);
      }
    } catch (error) {
      Alert.alert('Uai sô', 'Ou um trem ou outro trem ta errado uai', [
        { text: 'Tendinovo', onPress: () => console.log('OK Pressed') },
      ]);
      setLoading(false)
    }
  }
  const handleCreateAccount = async () => {
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
          
          <TouchableOpacity style={styles.button} loading={loading} onPress={handleLoginV2}>
            <Text style={styles.buttonText}>Entrar V2</Text>
          </TouchableOpacity>
          {/* <Text style={styles.auxText} onPress={handleCreateAccount}>Criar Conta</Text> */}
        </>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  auxText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
})

export default Login;