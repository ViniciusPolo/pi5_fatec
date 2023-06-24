import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Login from './pages/login';
import Main from './pages/main';
import Menu from './pages/menu';
import ManagerRestaurant from './pages/managerRestaurant';
import CreateAccount from './pages/createAccount';
import CreateRestaurant from './pages/createRestaurant';
import AddMenu from './pages/addMenu';
import Welcome from './pages/welcome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Basket from './pages/basket';
import AddBasket from './pages/addBasket';

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
            backgroundColor: "#FFA500",
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name='login' component={Login} options={{
          headerShown: false,
          title: 'LOGIN',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#FFA500",
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='createAccount' component={CreateAccount} options={{
          title: 'CADASTRO DE USUÁRIO',
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#FFA500",
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='main' component={Main} options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#FFA500",
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
            backgroundColor: '#FFA500',
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='menu' component={Menu} options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#FFA500",
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='managerRestaurant' component={ManagerRestaurant} options={{
          title: 'Gerenciar Restaurante',
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#FFA500",
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='createRestaurant' component={CreateRestaurant} options={{
          title: 'Criar Restaurante',
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#FFA500",
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: 'bold',
          }
        }} />

        <Stack.Screen name='addmenu' component={AddMenu} options={{
          title: 'Criar Prato',
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FFA500',
          },
          headerTitleStyle:{
            color: '#000',
            fontWeight: 'bold',
          }
        }}/>

        <Stack.Screen name='basket' component={Basket} options={{
          title: 'Seu Carrinho',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FFA500',
          },
          headerTitleStyle:{
            color: '#000',
            fontWeight: 'bold',
          }
        }}/>    

        <Stack.Screen name='addBasket' component={AddBasket} options={{
          title: 'Adicionar ao Carrinho',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FFA500',
          },
          headerTitleStyle:{
            color: '#000',
            fontWeight: 'bold',
          }
        }}/>    

      </Stack.Navigator>
    </NavigationContainer>
  );
}