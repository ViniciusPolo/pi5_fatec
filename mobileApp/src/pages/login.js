import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator, ImageBackground, Alert } from 'react-native';
import api from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('pedro@silva.com')
  const [password, setPassword] = useState('password')
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation();

  const handleLogin = async () => {
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
          <ImageBackground
            source={require('../assets/logo111.png')}
            style={{ width: 400, height: 200 }}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}

            autoCapitalize="none"
            keyboardType="email-address"
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



        </>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffa500',
    paddingTop: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  auxText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
})

export default Login;