import React, { Component } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Alert, ActivityIndicator, Text } from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, ProfileButton, ProfileButtonText } from './styles';
import api from '../services/api';


export default class Home extends Component {
 
    state = {
        restaurants: [],
        users:''
    }

    
    async componentDidMount(){
        try {
            const { route } = this.props;
            const { user } = route.params;
            console.log("user", user)
            const userResponse = await api.get(`https://um-trem-de-cume-api.onrender.com/users/${user.user_id}`);

            const response = await api.get(`https://um-trem-de-cume-api.onrender.com/restaurants`);
            this.setState({restaurants: response.data, users: userResponse.data.user});
            console.log(response.data)
            
        } catch (error) {
            console.error(error)
        }
    }

    render (){
        const { restaurants, users } = this.state
        console.log("id User logado:", this.state.users.id)

       
        return (
            <Container>
                <Text>Olá {users.first_name}, onde vamos comer hoje?</Text>
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
                                this.props.navigation.navigate("menu", {restaurant: item});
                            }}>
                                <ProfileButtonText>Ver Menu</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                />
                {/* exibe somente se for dono de restaurante, type of user 2 */}
                {users.type_of_user == 2 ?
                    (<ProfileButton style={{backgroundColor: "orange"}}onPress = {() => {console.log("gerenciar restaurante")}}>
                        <ProfileButtonText>Gerenciar Restaurante</ProfileButtonText>
                    </ProfileButton>) : <></>
                }
                {/* exibe somente se for entregador, type of user 3 */}
                {users.type_of_user == 3 ?
                    (<ProfileButton style={{backgroundColor: "orange"}}onPress = {() => {console.log("gerenciar entregas")}}>
                        <ProfileButtonText>Gerenciar Entregas</ProfileButtonText>
                    </ProfileButton>) : <></>
                }
            </Container>
        );

    }
}