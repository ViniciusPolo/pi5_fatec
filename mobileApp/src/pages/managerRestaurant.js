import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import { ActivityIndicator, Alert, Text } from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, button, ProfileButtonText, ProfileButton, Buttons, StyleSheet } from './styles';
import api from '../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ManagerRestaurant extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        restaurants: [],
        users: '',
        loading: false
    }

    //const navigation = useNavigation();

    async componentDidMount() {
        this.setState({ loading: true })
        const { route, user } = this.props;
        let user_id = user?.user_id
        //const { user } = route.params;
        try {
            if (!user) {
                user_id = await AsyncStorage.getItem("id_user")
                const userResponse = await api.listUsers(user_id);
                this.setState({ users: userResponse });
            } else {
                this.setState({ users: user });
            }
            const response = await api.listRestaurantsForOwner(user_id);

            this.setState({ restaurants: response.restaurants});

            this.setState({ loading: false })
        } catch (error) {
            this.setState({ loading: false })
            console.error(error)
        }
    }

    render() {
        const { restaurants, users } = this.state

        return (
            <Container>
                {this.state.loading ? (<ActivityIndicator color='black' size={"large"} />) : (
                    <>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: '#000' }} >Olá {users.first_name} te ajudo a gerenciar seu negócio</Text>
                        <List
                            showVerticalScrollIndicator={false}
                            data={restaurants}
                            keyExtractor={(restaurant) => String(restaurant.restaurant_name)}
                            renderItem={({ item }) => (
                                <Restaurant style={{ borderBottomWidth: 0.6, borderColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: 10 }}>
                                    {/* <Logo source={{uri: item.logo}}/> */}
                                    <Name style={{ paddingTop: 6, paddingBottom: 4 }} >{item.restaurant_name}</Name>
                                    <Bio>{item.bio}</Bio>

                                    <Buttons style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, justifyContent: 'center' }}>
                                        <ProfileButton style={{ padding: 2, margin: 5, width: 120, height: 120, backgroundColor: "#FFA500" }} onPress={() => {
                                            this.props.navigation.navigate("menu", { restaurant: item });
                                        }}>
                                            <ProfileButtonText style={{ color: '#000', textAlign: 'center' }} >Ver Menu</ProfileButtonText>
                                        </ProfileButton>
                                        <ProfileButton style={{ padding: 2, margin: 5, width: 120, height: 120, backgroundColor: "#FFA500" }} onPress={() => {
                                            this.props.navigation.navigate("addmenu", { restaurant: item });
                                        }}>
                                            <ProfileButtonText style={{ color: '#000', textAlign: 'center' }} >Criar Prato</ProfileButtonText>
                                        </ProfileButton>
                                        <ProfileButton style={{ padding: 2, margin: 5, width: 120, height: 120, backgroundColor: "#FFA500" }} onPress={() => {
                                            //this.props.navigation.navigate("menu", {restaurant: item});
                                        }}>
                                            <ProfileButtonText style={{ color: '#000', textAlign: 'center' }} >Editar Menu</ProfileButtonText>
                                        </ProfileButton>
                                        <ProfileButton style={{ padding: 2, margin: 5, width: 120, height: 120, backgroundColor: "#FFA500" }} onPress={() => {
                                            //this.props.navigation.navigate("menu", {restaurant: item});
                                        }}>
                                            <ProfileButtonText style={{ color: '#000', textAlign: 'center' }} >Ver Pedidos</ProfileButtonText>
                                        </ProfileButton>
                                        <ProfileButton style={{ padding: 2, margin: 5, width: 120, height: 120, backgroundColor: "#FFA500" }} onPress={() => {
                                            //this.props.navigation.navigate("menu", {restaurant: item});
                                        }}>
                                            <ProfileButtonText style={{ color: '#000', textAlign: 'center' }} >Editar Restaurante</ProfileButtonText>
                                        </ProfileButton>
                                    </Buttons>
                                </Restaurant>
                            )}
                        />

                        <ProfileButton style={{ button, backgroundColor: "orange", color: '#000' }} >
                            <ProfileButtonText onPress={() => { this.props.navigation.navigate("createRestaurant", { userOwner: users.user_id }) }} style={{ color: '#000' }}>Criar Restaurante</ProfileButtonText>
                        </ProfileButton>
                    </>)}
            </Container>
        )

    }

}


