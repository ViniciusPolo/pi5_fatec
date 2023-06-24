import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from "@react-navigation/native";
import { View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';


import Home from './home';
import Restaurante from './PagesUsers/pedidos';
import Profile from './PagesUsers/perfil';
import Search from './PagesUsers/search';
import Login from './login';
import ManagerRestaurant from './managerRestaurant';


const { Navigator, Screen } = createBottomTabNavigator();

export default function TabNav(props) {
    const route = useRoute();
    const { user } = route.params;
    const [userId, setUserId] = useState(user.user_id)
    const [userLog, setUserLog] = useState([])
    const [typeUser, setTypeUser] = useState(0)
    
    useEffect( async (userId) => {  
        const userLoged = await api.listUsers(userId);
        if(userLoged) setTypeUser(userLoged.user[0].type_of_user)
        const userResponse = async (userId) => {
            const userLoged = await api.listUsers(userId);
            console.log("userResponse: ", userLoged.data)
            setUserLog(userLoged.data)
        }
        console.log("props ---> *** --->", userLog)
        setUserLog(userResponse)
    }, []);

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: '#000',
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarVisibilityAnimationConfig: true,
                tabBarShowLabel: false,

                tabBarStyle: {
                    height: 70,
                    backgroundColor: '#FFA500',
                    borderTopWidth: 0
                }
            }}

        >
            <Screen
                name="Homeuse"
                component={(props) => <Home {...props} user={user} />}
                //component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="home" size={size} color={color} />,
                }}
                //initialParams={user}
            />
                {typeUser >= 0 ? (<Screen
                name="GerenciarRestaurante"
                component={(props) => <ManagerRestaurant {...props} user={user} />}
                //component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="business" size={size} color={color} />,
                }}
                //initialParams={user}
                />): (<></>)
            }

            <Screen
                name="Pedidos"
                component={Restaurante}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="outbox" size={size} color={color} />,
                    // tabBarBadge: 0
                }}
                initialParams={user}
            />

            <Screen
                name="Procurar"
                component={Search}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="search" size={size} color={color} />
                }}
                initialParams={user}
            />
            <Screen
                name="Perfil"
                component={Profile}
                tabBarShowLabel={true}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="person" size={size} color={color} />
                }}
                initialParams={user}
            />


        </Navigator>
    )
}