import React, { Component } from 'react';
import { Container, List, Restaurant, Logo, Name, Bio, ProfileButton, ProfileButtonText } from './styles';
import api from '../services/api';


export default class Home extends Component {
 
    state = {
        restaurants: [],
    }

    async componentDidMount(){
        try {
            const response = await api.get(`https://um-trem-de-cume-api.onrender.com/restaurants`);
            this.setState({restaurants: response.data});
            console.log(response.data)
            
        } catch (error) {
            console.error(error)
        }
    }

    render (){
        const { restaurants } = this.state

        return (
            <Container>
                <List
                    showVerticalScrollIndicator={false}
                    data={restaurants}
                    keyExtractor={(restaurant) => String(restaurant.restaurant_name)}
                    renderItem = {({item}) => (
                        <Restaurant>
                            {/* <Logo source={{uri: item.logo}}/> */}
                            <Name>{item.restaurant_name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton onPress = {() => this.gerar()}>
                                <ProfileButtonText>Ver Menu</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                />
            </Container>
        );

    }
}