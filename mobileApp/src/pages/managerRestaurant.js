import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import { ActivityIndicator, Alert, Text } from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, button, ProfileButtonText, ProfileButton } from './styles';
import api from '../services/api';

export default class ManagerRestaurant extends Component {

    constructor(props){
        super(props);
    }

    state = {
        restaurants: [],
        users:'',
        loading: false
    }

    //const navigation = useNavigation();

    async componentDidMount(){
        this.setState({loading: true})
        const { route, user } = this.props;
        //const { user } = route.params;
        try {
            const response = await api.listRestaurantsForOwner(user.user_id);
            
            this.setState({restaurants: response.restaurants, users: user});
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
<<<<<<< HEAD
                  <Text>Olá {users.first_name} te ajudo a gerenciar seu negócio</Text>
=======
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }} >Olá {users.first_name} te ajudo a gerenciar seu negócio</Text>
>>>>>>> origin/fabricio_front
                  <List
                    showVerticalScrollIndicator={false}
                    data={restaurants}
                    keyExtractor={(restaurant) => String(restaurant.restaurant_name)}
                    renderItem = {({item}) => (
<<<<<<< HEAD
                        <Restaurant>
                            {/* <Logo source={{uri: item.logo}}/> */}
                            <Name>{item.restaurant_name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton onPress = {() => {
                                this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                                <ProfileButtonText>Ver Menu</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton onPress = {() => {
                                this.props.navigation.navigate("addmenu", {restaurant: item});
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
=======
                        <Restaurant style={{ borderBottomWidth: 0.6, borderColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: 10}}>
                            {/* <Logo source={{uri: item.logo}}/> */}
                            <Name style={{ paddingTop: 6, paddingBottom: 4 }} >{item.restaurant_name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {() => {
                                this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                            <ProfileButtonText style={{ color: '#000' }} >Ver Menu</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {() => {
                                this.props.navigation.navigate("addmenu", {restaurant: item});
                            }}>
                            <ProfileButtonText style={{ color: '#000' }} >Criar Prato</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {() => {
                                //this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                            <ProfileButtonText style={{ color: '#000' }} >Editar Menu</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {() => {
                                //this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                            <ProfileButtonText style={{ color: '#000' }} >Ver Pedidos</ProfileButtonText>
                            </ProfileButton>
                            <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {() => {
                                //this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                            <ProfileButtonText style={{ color: '#000' }} >Editar Restaurante</ProfileButtonText>
>>>>>>> origin/fabricio_front
                            </ProfileButton>
                        </Restaurant>
                    )}
                />

<<<<<<< HEAD
                <ProfileButton style={{button, backgroundColor: "orange"}}>
                    <ProfileButtonText  onPress={() => {this.props.navigation.navigate("createRestaurant", {userOwner: this.state.users.id})}}>Criar Restaurante</ProfileButtonText>  
=======
                <ProfileButton style={{button, backgroundColor: "orange", color: '#000'}} >
                    <ProfileButtonText  onPress={() => {this.props.navigation.navigate("createRestaurant", {userOwner: this.state.users.id})}} style={{color: '#000'}}>Criar Restaurante</ProfileButtonText>  
>>>>>>> origin/fabricio_front
                </ProfileButton>
            </>)}
        </Container>
        )
    }
}
<<<<<<< HEAD
=======

>>>>>>> origin/fabricio_front
