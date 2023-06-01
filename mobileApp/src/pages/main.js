import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';


import Home from './home';
import Restaurante from './PagesUsers/pedidos';
import Profile from './PagesUsers/perfil';
import Search from './PagesUsers/search';
import Login from './login';


const { Navigator, Screen } = createBottomTabNavigator();


export default function TabNav(props) {
    const route = useRoute();
    const { user } = route.params;
    const userId = user.user_id
    console.log("props ->", userId)

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: '#000',
                headerShown: true,
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
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="home" size={size} color={color} />,
                }}
            />
            <Screen
                name="Pedidos"
                component={Restaurante}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="outbox" size={size} color={color} />,
                    // tabBarBadge: 0
                }}
            />

            <Screen
                name="Procurar"
                component={Search}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="search" size={size} color={color} />
                }}
            />
            <Screen
                name="Perfil"
                component={Profile}
                tabBarShowLabel={true}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="person" size={size} color={color} />
                }}
            />


        </Navigator>
    )
}