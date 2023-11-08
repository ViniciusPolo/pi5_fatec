// import React, { useState, useCallback, useContext } from "react";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import Picker from '@ouroboros/react-native-picker';
// import { StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
// import api from '../services/api';

// const AddAndUpdateAddress = () => {

//     state = {
//         loading: false,
//         cep: '',
//         street: '',
//         number: 0,
//         complement: '',
//         city: '',
//         state: '',
//         country: '',
//         lagitude: '',
//         longitude: ''
//     }

//     const navigation = useNavigation();
//     const route = useRoute();
//     const { restaurant } = route.params;
    
//     render(){
//         const {loading, cep, street, number, complement, city, state, country, lagitude, longitude} = this.state

//         return (
//         <View style={styles.container}>
//             {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
//             <>
//             <TextInput 
//                     style={styles.input}
//                     placeholder="CEP"
//                     value={0}
//                     onChangeText={0}
//                 />
//                 <TouchableOpacity style={styles.naoSeiCepButton} onPress={console.log("click")}>
//                     <Text style={styles.naoSeiCep}>Não sei Meu Cep</Text>  
//                 </TouchableOpacity>

//             <TextInput 
//                     style={styles.input}
//                     placeholder="Rua"
//                     value={0}
//                     onChangeText={0}
//                 />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Número"
//                     value={0}
//                     onChangeText={0}
//                     />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Complemento"
//                     value={0}
//                     onChangeText={0}
//                     />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Cidade"
//                     value={0}
//                     onChangeText={0}
//                     />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Estado"
//                     // value={address}
//                     // onChangeText={setAddress}
//                 />    

//                 <TextInput 
//                     style={styles.input}
//                     placeholder="País"
//                     // value={restaurantName}
//                     // onChangeText={setRestaurantName}
//                     />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Latitude"
//                     // value={bio}
//                     // onChangeText={setBio}
//                     />
    
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="Longitude"
//                     //     value={address}
//                 //     onChangeText={setAddress}
//                 />     
    
//                 <TouchableOpacity style={styles.button} onPress={console.log("click")}>
//                     <Text style={styles.buttonText}>Salvar Endereço</Text>  
//                 </TouchableOpacity>
//             </>)}
//         </View>
//     )
// }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: '#ffa500',
//     },
//     input: {
//       borderWidth: 1,
//       borderColor: '#fff',
//       borderRadius: 5,
//       padding: 10,
//       marginVertical: 10,
//       width: '80%',
//     },
//     naoSeiCepButton:{
//         backgroundColor: '#FFA500',
//         width:'100%',
//         alignItems: 'stretch'
//       },
//     naoSeiCep: {
//         marginVertical: 5,
//         width: '90%',
//         textAlign: 'right'
//       },
//     inputPicker: {
//         borderWidth: 1,
//         borderColor: '#003',
//         borderRadius: 5,
//         padding: 10,
//         marginVertical: 10,
//         width: '140%',
//       },
//     button:{
//       backgroundColor: '#FFA500',
//       borderRadius: 5,
//       marginTop: 10,
//       padding: 10,
//       width:'80%',
//       alignItems: 'center',
//     },
//     buttonText:{
//       color: '#000',
//       fontWeight: 'bold',
//       fontSize: 20,
//     },
// })

// export default AddAndUpdateAddress;