import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Login from './pages/login';
import Main from './pages/main';
import CreateAccount from './pages/createAccount';
import Welcome from './pages/welcome';
import CreateRestaurant from './pages/createRestaurant';
import ManagerRestaurant from './pages/managerRestaurant';
import AddMenu from './pages/addMenu';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const handleLogout = async () => {
  await api.post(`https://um-trem-de-cume-api.onrender.com/logout`)
  navigation.navigate("login")
}


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='welcome' component={Welcome} options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name='login' component={Login} options={{
          headerShown: false,
          title: 'LOGIN',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='createAccount' component={CreateAccount} options={{
          title: 'CRIAR USUÀRIO',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='main' component={Main} options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#3498db",
          },
        }} />

        <Stack.Screen name='home' component={Home} options={{
          title: 'Um Trem Di Cumê',
          headerRight: () => {
            return <Icon.Button
              name='logout'
              color='white'
              onPress={handleLogout}
            />
          },
          headerLeft: null,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='addmenu' component={AddMenu} options={{
          title: 'Criar Prato',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle:{
            color: '#fff',
            fontWeight: 'bold',
          }
        }}/>    

      </Stack.Navigator>
    </NavigationContainer>
  );
}