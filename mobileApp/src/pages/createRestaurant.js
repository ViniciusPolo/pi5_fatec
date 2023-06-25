import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import { StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert } from 'react-native';
import api from '../services/api';

const CreateRestaurant = () => {
    const [restaurantName, setRestaurantName] = useState('')
    const [logo, setLogo] = useState('')
    const [address, setAddress] = useState('')
    const [bio, setBio] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigation = useNavigation();
    const route = useRoute();
    const { userOwner } = route.params;
    
    const handleCreate = async  () => {
        try {
            setLoading(true)
            const log = await api.createRestaurant({
                user_owner: userOwner,
                restaurant_name: restaurantName,
                bio: bio,
                logo: '',
                address: '',
                })
            const data = log;
                
            if (data) {
                setLoading(false)
                Alert.alert('Restaurante Criado');
                navigation.navigate("managerRestaurant")
            } else {
                console.error("API ERROR", data.error);
                setLoading(false)
                navigation.navigate("managerRestaurant")
            }
        } catch (error) {
            Alert.alert('Restaurante não cadastrado, verifique as informações');
        }
    }   

    return (
        <View style={styles.container}>
            {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
            <>
            <TextInput 
                    style={styles.input}
                    placeholder="Nome do Restaurante"
                    value={restaurantName}
                    onChangeText={setRestaurantName}
                />
    
                <TextInput 
                    style={styles.input}
                    placeholder="Descrição"
                    value={bio}
                    onChangeText={setBio}
                />
    
                <TextInput 
                    style={styles.input}
                    placeholder="Logo"
                    value={logo}
                    onChangeText={setLogo}
                    />
    
                <TextInput 
                    style={styles.input}
                    placeholder="Endereço"
                    value={address}
                    onChangeText={setAddress}
                    />     
    
                <TouchableOpacity style={styles.button} onPress={handleCreate}>
                    <Text style={styles.buttonText}>Criar Restaurante</Text>  
                </TouchableOpacity>
            </>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffa500',
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
    inputPicker: {
        borderWidth: 1,
        borderColor: '#003',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '140%',
      },
    button:{
      backgroundColor: '#FFA500',
      borderRadius: 5,
      marginTop: 10,
      padding: 10,
      width:'80%',
      alignItems: 'center',
    },
    buttonText:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 20,
    },
})
   
export default CreateRestaurant;

























// import React, { Component, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import Picker from '@ouroboros/react-native-picker';
// import { StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert } from 'react-native';
// import api from '../services/api';


// export default class CreateRestaurant extends Component {
    
//     state = {
//         userOwner: '',
//         restaurantName: '',
//         bio: '',
//         logo: '',
//         address: '',
//         loading: false
//     }

//     async handleCreate(){
//         try {
//             const { route } = this.props;
//             const { userOwner } = route.params;
//             this.setState({userOwner:userOwner})
//             console.log('aqui', this.state.userOwner)
            
//             const log = await api.post(`https://um-trem-de-cume-api.onrender.com/restaurants`, {
//                         user_owner: this.state.userOwner,
//                         restaurant_name: restaurantName,
//                         bio: bio,
//                         logo: '',
//                         address: '',
//                     })
//                     const data = log.data;
                    
//                     if (data) {
//                         this.props.navigation.navigate("managerResturant",{});
//                     } else {
//                         console.error("API ERROR", data.error);
//                         this.props.navigation.navigate("managerResturant",{});
//                     }
//             } catch (error) {
//                 Alert.alert('Restaurante não cadastrado, verifique as informações');
//             }
//         }
            
//             return (
//                 <View>
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Nome do Restaurante"
//                     value={restaurantName}
//                     onChangeText={this.setState({restaurantName: restaurantName})}
//                 />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Descrição"
//                     value={bio}
//                     onChangeText={this.setState({bio:bio})}
//                 />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Logo"
//                     value={logo}
//                     onChangeText={this.setState({logo:logo})}
//                     />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Endereço"
//                     value={address}
//                     onChangeText={this.setState({address:address})}
//                     />     
    
//                 <TouchableOpacity style={styles.button} onPress={this.handleCreate}>
//                     <Text style={styles.buttonText}>Criar Resturante</Text>  
//                 </TouchableOpacity>
//                 </>)}
//             </View>
//         )
// }


