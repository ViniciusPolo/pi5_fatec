import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';


import Home from './PagesUsers/home';
import Restaurante from './PagesUsers/pedidos';
import Profile from './PagesUsers/perfil';
import Search from './PagesUsers/search';


const { Navigator, Screen } = createBottomTabNavigator();


export default function TabNav({ route }) {
    const { user } = route.params;

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
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="home" size={size} color={color} />,
                }}
                initialParams={user}
            />
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