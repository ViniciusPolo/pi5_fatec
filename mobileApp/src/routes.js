import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Login from './pages/login';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='login' component={Login} options={{
          title: 'LOGIN',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }}/>

        <Stack.Screen name='home' component={Home} options={{
          title: 'Um Trem Di Cumê',
          headerLeft: null,
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