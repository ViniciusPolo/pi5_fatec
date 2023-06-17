import React, { Component } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Alert, ActivityIndicator, Text } from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, ProfileButton, ProfileButtonText } from './styles';
import api from '../services/api';
import { colors } from 'react-select/dist/declarations/src/theme';


export default class Home extends Component {

    constructor(props){
        super(props);
    }

    state = {
        restaurants: [],
        users:[],
        loading: false
    }


    async componentDidMount() {
        try {
            this.setState({loading:true})
            const { navigation, route, user } = this.props;
            //const { user } = route.params || this.props
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
                <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}} >Olá {users.first_name}, onde vamos comer hoje?</Text>
                <List
                    showVerticalScrollIndicator={false}
                    data={restaurants}
                    keyExtractor={(restaurant) => String(restaurant.restaurant_name)}
                    renderItem={({ item }) => (
                        <Restaurant style={{ borderBottomWidth: 0.6, borderColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: 10 }} >
                            {/* <Logo source={{uri: item.logo}}/> */}
                            <Name style={{ paddingTop: 6, paddingBottom: 4 }} >{item.restaurant_name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton style={{ backgroundColor: '#FFA500'}} onPress={() => {
                                this.props.navigation.navigate("menu", { restaurant: item });
                            }}>
                                <ProfileButtonText style={{ color: '#000' }}>Ver Menu</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                />
                <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress={() => { console.log("gerenciar restaurante") }}>
                    <ProfileButtonText style={{ color: '#000' }} >Gerenciar Usuário</ProfileButtonText>
                </ProfileButton>
                {/* exibe somente se for dono de restaurante, type of user 2 */}
                {[3, 4].includes(users.type_of_user) ?
                    (<ProfileButton style={{ backgroundColor: "orange", color: '#000' }} onPress={() => { console.log("gerenciar restaurante") }}>
                        <ProfileButtonText>Gerenciar Restaurante</ProfileButtonText>
                    </ProfileButton>) : <></>
                }
                 </> )}
            </Container>
        );

    }
}