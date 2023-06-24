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
        const { route } = this.props;
        const { user, restaurant } = route.params;
        try {
            console.log("user-->", user, "restaurant", restaurant)
            //const userResponse = await api.get(`https://um-trem-de-cume-api.onrender.com/users/${user.user_id}`);

            //const response = await api.get(`https://um-trem-de-cume-api.onrender.com/restaurants`);
            this.setState({restaurants: restaurant, users: user});
            console.log("user -->", this.state.users, "\nrestaurant", this.state.restaurants)
            
        } catch (error) {
            console.error(error)
        }
    }
    
                
    render (){
                
        return (
        <Container>
            <Text>Olá {this.state.users.first_name} te ajudo a gerenciar seu negócio</Text>
            {/* {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <> */}
                <ProfileButton>
                    <ProfileButtonText >Gerenciar Restaurante</ProfileButtonText>  
                </ProfileButton>
                <ProfileButton style={button}>
                    <ProfileButtonText onPress={() => {this.props.navigation.navigate("createRestaurant", {userOwner: this.state.users.id})}}>Criar Restaurante</ProfileButtonText>  
                </ProfileButton>
            {/* </>)} */}
        </Container>
        )
    }
}
