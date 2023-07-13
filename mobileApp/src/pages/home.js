import React, { Component } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Alert, ActivityIndicator, Text } from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, ProfileButton, ProfileButtonText } from './styles';
import api from '../services/api';
//import { colors } from 'react-select/dist/declarations/src/theme';
import { storage } from '../config/firebase';
import { ref, getDownloadURL } from 'firebase/storage'

export default class Home extends Component {

    constructor(props){
        super(props);
    }

    state = {
        restaurants: [],
        users:[],
        loading: false,
        logoteste:''
    }


    async componentDidMount() {
        try {
            this.setState({loading:true})
            const { navigation, route, user } = this.props;
            //const { user } = route.params || this.props
            const userResponse = await api.listUsers(user.user_id);
            
            const response = await api.listRestaurants()
            this.setState({restaurants: response, users: userResponse.user});

            const imagemRef = ref(storage, 'restaurant_id_1.png')

            getDownloadURL(imagemRef).then((url) => {
            console.log(url)
            this.setState({logoteste:url})
        })
            
            this.setState({loading:false})
        } catch (error) {
            console.error(error)
            this.setState({loading:false})
        }
    }

    render() {
        const { restaurants, users, logoteste } = this.state

        return (
            <Container>
                 {this.state.loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <>
                <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#000'}} >Olá {users.first_name}, onde vamos comer hoje?</Text>
                <List
                    showVerticalScrollIndicator={false}
                    data={restaurants}
                    keyExtractor={(restaurant) => String(restaurant.restaurant_name)}
                    renderItem={({ item }) => (
                        <Restaurant style={{ borderBottomWidth: 0.6, borderColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: 10 }} >
                            <Logo source={{uri: item.logo !== '' ? item.logo : logoteste}}/>
                            <Name style={{ paddingTop: 6, paddingBottom: 4 }} >{item.restaurant_name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton style={{ backgroundColor: '#FFA500'}} onPress={() => {
                                this.props.navigation.navigate("menu", { restaurant: item, user: users.id });
                            }}>
                                <ProfileButtonText style={{ color: '#000' }}>Ver Menu</ProfileButtonText>
                            </ProfileButton>
                        </Restaurant>
                    )}
                />
                 </> )}
            </Container>
        );

    }
}