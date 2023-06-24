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
        user: 0,
        loading: false
    }

    async componentDidMount(){
        this.setState({loading: true})
        const { route } = this.props;
        const { restaurant, user } = route.params;
        console.log("userMenu",user)
        try {
            const response = await api.listMenuForRestaurantsForID(restaurant.id);
            this.setState({menus: response.restaurant, restaurants: restaurant, user: user});
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
        const { menus, user } = this.state

        return (
            <Container>
                {this.state.loading ? (<ActivityIndicator color='black' size={"large"} />) : (
                <>
                <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#000'}} >{this.state.restaurants.restaurant_name}</Text>
                <Text style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold', paddingTop: 6, paddingBottom: 4, color: '#000' }} >{this.state.restaurants.bio}</Text>
                <List
                    showVerticalScrollIndicator={false}
                    data={menus}
                    keyExtractor={(menu) => String(menu.food_name)}
                    renderItem = {({item}) => (
                        <Restaurant style={{ borderBottomWidth: 0.6, borderColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: 10 }} >
                            {/* <Logo source={{uri: item.logo}}/> */}
                            <Name>{item.food_name}</Name>
                            <Bio>R$ {item.price}</Bio>
                            <Bio>{item.prepare_time} minutos</Bio>

                            <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {() => this.props.navigation.navigate('addBasket',{itemAdded: item, user: user} )}>
                                <ProfileButtonText style={{ color: '#000' }}>Quero Experimentar</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                    />
                </>)}    
            </Container>
        );

    }

}
