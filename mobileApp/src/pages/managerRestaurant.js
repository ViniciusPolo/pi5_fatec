import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import { ActivityIndicator, Alert, Text } from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, button, ProfileButtonText, ProfileButton } from './styles';
import api from '../services/api';

export default class ManagerRestaurant extends Component {

    state = {
        restaurants: [],
        users:'',
        loading: false
    }

    //const navigation = useNavigation();

    async componentDidMount(){
        this.setState({loading: true})
        const { route } = this.props;
        const { user } = route.params;
        try {
            const response = await api.get(`https://um-trem-de-cume-api.onrender.com/restaurants/owner/${user.id}`);
            
            this.setState({restaurants: response.data.restaurants, users: user});
            console.log("restaurants --->" ,this.state.restaurants)
            
            this.setState({loading: false})
        } catch (error) {
            this.setState({loading: false})
            console.error(error)
        }
    }
                  
    render (){
        const { restaurants, users } = this.state
        
        return (
        <Container>
            {this.state.loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <>
                  <Text>Olá {users.first_name} te ajudo a gerenciar seu negócio</Text>
                  <List
                    showVerticalScrollIndicator={false}
                    data={restaurants}
                    keyExtractor={(restaurant) => String(restaurant.restaurant_name)}
                    renderItem = {({item}) => (
                        <Restaurant>
                            {/* <Logo source={{uri: item.logo}}/> */}
                            <Name>{item.restaurant_name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton onPress = {() => {
                                //this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                                <ProfileButtonText>Ver Menu</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton onPress = {() => {
                                //this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                                <ProfileButtonText>Criar Prato</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton onPress = {() => {
                                //this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                                <ProfileButtonText>Editar Menu</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton onPress = {() => {
                                //this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                                <ProfileButtonText>Ver Pedidos</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton onPress = {() => {
                                //this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                                <ProfileButtonText>Editar Restaurante</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                />

                <ProfileButton style={{button, backgroundColor: "orange"}}>
                    <ProfileButtonText  onPress={() => {this.props.navigation.navigate("createRestaurant", {userOwner: this.state.users.id})}}>Criar Restaurante</ProfileButtonText>  
                </ProfileButton>
            </>)}
        </Container>
        )
    }
}
