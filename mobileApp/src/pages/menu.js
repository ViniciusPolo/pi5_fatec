import React, { Component } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Alert, ActivityIndicator, Text } from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, ProfileButton, ProfileButtonText } from './styles';
import api from '../services/api';


export default class Menu extends Component {
    //useNavigation();
    state = {
        menus: [],
        restaurants: {},
        loading: false
    }

    async componentDidMount(){
        this.setState({loading: true})
        const { route } = this.props;
        const { restaurant } = route.params;
        try {
            console.log('aqui',restaurant) 
            const response = await api.listMenuForRestaurantsForID(restaurant.id);
            console.log('aqui',response) 
            this.setState({menus: response.restaurant, restaurants: restaurant});
            if (this.state.menus.length == 0){
                //console.log('aqui',this.state.menus)
                this.setState({loading: false})
                Alert.alert('Oxi, esse restaurante não tem pratos disponíveis');
                this.navigation.navigate("home");
            }
            this.setState({loading: false})
        } catch (error) {
            this.setState({loading: false})
            Alert.alert('Oxi, esse restaurante não tem pratos disponíveis');
            this.navigation.navigate("home");
        }
    }

    render (){
        const { menus } = this.state

        return (
            <Container>
                {this.state.loading ? (<ActivityIndicator color='black' size={"large"} />) : (
                <>
                <Text>{this.state.restaurants.restaurant_name}</Text>
                <Text>{this.state.restaurants.bio}</Text>
                <List
                    showVerticalScrollIndicator={false}
                    data={menus}
                    keyExtractor={(menu) => String(menu.food_name)}
                    renderItem = {({item}) => (
                        <Restaurant>
                            {/* <Logo source={{uri: item.logo}}/> */}
                            <Name>{item.food_name}</Name>
                            <Bio>R$ {item.price}</Bio>
                            <Bio>{item.prepare_time} minutos</Bio>

                            <ProfileButton onPress = {() => this.props.navigation.navigate('basket',{itemAdded: item} )}>
                                <ProfileButtonText>Quero Experimentar</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                    />
                </>)}    
            </Container>
        );

    }

}
