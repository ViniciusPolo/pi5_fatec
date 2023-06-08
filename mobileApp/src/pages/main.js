import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';


import Home from './home';
import Restaurante from './PagesUsers/pedidos';
import Profile from './PagesUsers/perfil';
import Search from './PagesUsers/search';
import Login from './login';


const { Navigator, Screen } = createBottomTabNavigator();


<<<<<<< HEAD
export default function TabNav(props) {
    const route = useRoute();
    const { user } = route.params;
    const userId = user.user_id
    console.log("props ->", userId)
=======
export default function TabNav({ route }) {
    const { user } = route.params;
>>>>>>> ala_mobile

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