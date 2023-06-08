import React, { Component } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Alert, ActivityIndicator, Text } from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, ProfileButton, ProfileButtonText } from './styles';
import api from '../services/api';
import { colors } from 'react-select/dist/declarations/src/theme';


export default class Home extends Component {

    state = {
        restaurants: [],
        users:'',
        loading: false
    }


    async componentDidMount() {
        try {
            this.setState({loading:true})
            const { navigation, route } = this.props;
            const { user } = route.params;
            console.log("user", user)
            const userResponse = await api.listUsers(user.user_id);
            
            const response = await api.listRestaurants()
            this.setState({restaurants: response, users: userResponse.user});
            console.log(response)
            
            this.setState({loading:false})
        } catch (error) {
            console.error(error)
            this.setState({loading:false})
        }
    }

    render() {
        const { restaurants, users } = this.state
        console.log("id User logado:", this.state.users.id)


        return (
            <Container>
                 {this.state.loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <>
                <Text>Olá {users.first_name}, onde vamos comer hoje?</Text>
                <List
                    showVerticalScrollIndicator={false}
                    data={restaurants}
                    keyExtractor={(restaurant) => String(restaurant.restaurant_name)}
                    renderItem={({ item }) => (
                        <Restaurant>
                            {/* <Logo source={{uri: item.logo}}/> */}
                            <Name>{item.restaurant_name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton onPress={() => {
                                this.props.navigation.navigate("menu", { restaurant: item });
                            }}>
                                <ProfileButtonText>Ver Menu</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                />
                <ProfileButton style={{ backgroundColor: "orange" }} onPress={() => { console.log("gerenciar restaurante") }}>
                    <ProfileButtonText>Gerenciar Usuário</ProfileButtonText>
                </ProfileButton>
                {/* exibe somente se for dono de restaurante, type of user 2 */}
                {[2,4].includes(users.type_of_user)  ?
                    (<ProfileButton style={{backgroundColor: "orange"}} onPress = {() => {this.props.navigation.navigate("managerRestaurant", {user: users})}}>

                        <ProfileButtonText>Gerenciar Restaurantes</ProfileButtonText>
                    </ProfileButton>) : <></>
                }
                {/* exibe somente se for dono de restaurante, type of user 2 */}
                {[3, 4].includes(users.type_of_user) ?
                    (<ProfileButton style={{ backgroundColor: "orange" }} onPress={() => { console.log("gerenciar restaurante") }}>
                        <ProfileButtonText>Gerenciar Restaurante</ProfileButtonText>
                    </ProfileButton>) : <></>
                }
                 </> )}
            </Container>
        );

    }
}