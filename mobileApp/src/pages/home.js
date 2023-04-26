import React, { Component } from 'react';
import { Container, List, Restaurant, Logo, Name, Bio, ProfileButton, ProfileButtonText } from './styles';


export default class Home extends Component {
 
    state = {
        restaurants: [],
    }

    render (){
        const { restaurants } = this.state

        return (
            <Container>
                <List
                    showVerticalScrollIndicator={false}
                    data={restaurants}
                    keyExtractor={resturant => restaurants.restaurant_name}
                    renderItem = {({item}) => (
                        <Restaurant>
                            <Logo source={{uri: item.logo}}/>
                            <Name>{item.restaurant_name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton onPress = {() => {}}>
                                <ProfileButtonText>Ver Menu</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                />
            </Container>
        );

    }
}