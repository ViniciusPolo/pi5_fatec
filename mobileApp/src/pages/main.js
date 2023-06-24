import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';


import Menu from './menu';


const { Navigator, Screen } = createBottomTabNavigator();


export default function TabNav({ route }) {
    const { user } = route.params;
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}
        >
            <Screen
                name="Home"
                component={Menu}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="home" size={size} color={color} />
                }}
                initialParams={user}
            />
            <Screen
                name="Movimentos"
                component={Menu}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="outbox" size={size} color={color} />,
                    tabBarBadge: 7
                }}
            />

            <Screen
                name="Procurar"
                component={Menu}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="search" size={size} color={color} />
                }}
            />
            <Screen
                name="Perfil"
                component={Menu}
                tabBarShowLabel={true}
                options={{
                    tabBarIcon: ({ size, color }) => <Icon name="person" size={size} color={color} />
                }}
            />


        </Navigator>
    )
}