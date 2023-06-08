import React, { useState, useEffect } from "react";
import { Container, Bio, List, Name, ViewContainer, ViewDetail, Avatar } from './styleuser';


import api from '../../services/api';



export default function Search(props) {
    const [prop, setProp] = useState([]);
    const [token, setToken] = useState('');
    const [auth, setAuth] = useState('');
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        handleListSearch()
        setProp(props)
    }, [])




    async function handleListSearch() {
        let resp = [];
        let results = [];


        const tokenid = props.route.params.token
        const authUser = props.route.params.auth
        const idUser = props.route.params.user_id

        setToken(tokenid)
        setAuth(authUser)
        setUserId(idUser)

        try {
            resp = await api.listUsers(idUser);
            console.log(resp)
            results = resp.user;
            setName(results.first_name)
            setEmail(results.email)

        } catch (error) {

        }

    }




    return (
        <Container>
            <Name>PAGINA DE PROCURA</Name>
            <ViewDetail>
                <Name>token: </Name>
                <Bio>{token}</Bio>
            </ViewDetail>
            <ViewDetail>
                <Name>{"Auth: " + auth} </Name>
                <Name>{"Id User: " + userId} </Name>
            </ViewDetail>
            <ViewContainer>
                <Name>{"First Name: " + name} </Name>
            </ViewContainer>
            <ViewContainer>
                <Name>{"Email: " + email} </Name>
            </ViewContainer>
        </Container>
    )

}