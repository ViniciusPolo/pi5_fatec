import React, { useState, useEffect } from "react";
import { Container, Bio, List, Name, ViewContainer, ViewDetail, Avatar } from './styleuser';
import { Keyboard, ActivityIndicator } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { View, Text } from "react-native-animatable";

export default function Home(props) {
    const [restaurant, setRestaurant] = useState([]);
    const [prop, setProp] = useState([]);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [auth, setAuth] = useState('');
    const [userId, setUserId] = useState('');


    useEffect(() => {
        handleListRestaurants()
        setProp(props)
    }, [])




    async function handleListRestaurants() {
        let resp = [];
        let results = [];

        const tokenid = props.route.params.token
        const authUser = props.route.params.auth
        const idUser = props.route.params.user_id

        setToken(tokenid)
        setAuth(authUser)
        setUserId(idUser)

        try {
            setLoading(true)
            resp = await api.listRestaurants();
            results = resp;
            setRestaurant(results)
            setLoading(false)


            resp = await api.listUsers(idUser);
            results = resp.user;
            setName(results.first_name)
            setEmail(results.email)


        } catch (error) {

            setLoading(false)
            console.error(error)
        }

    }




    return (
        <Container>
            <Name>Home Options</Name>
        </Container>
    )

}