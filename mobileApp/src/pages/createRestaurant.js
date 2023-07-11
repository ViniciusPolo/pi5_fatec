import React, { useState, useCallback, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import { StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import api from '../services/api';

import storageImage from '../services/storage'

import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import DocumentPicker from "react-native-document-picker";

import NativeUploady, {
  UploadyContext,
  useItemFinishListener,
  useItemStartListener,
  useItemErrorListener,
} from "@rpldy/native-uploady";

const CreateRestaurant = () => {
    const [restaurantName, setRestaurantName] = useState('')
    const [logo, setLogo] = useState('')
    const [logoUrl, setLogoUrl] = useState('')
    const [address, setAddress] = useState('')
    const [bio, setBio] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigation = useNavigation();
    const route = useRoute();
    const { userOwner } = route.params;
    
    const handleCreate = async  () => {
        try {
            setLoading(true)
            if (restaurantName && userOwner){

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
                    await storageImage.saveImage(logo, `restaurant_id_${data.restaurants.id}`)

                    const imagemRef = ref(storage, `restaurant_id_${data.restaurants.id}`)
                    const url = await getDownloadURL(imagemRef)
            
                    await api.editRestaurant({
                    user_owner: userOwner,
                    restaurant_name: restaurantName,
                    bio: bio,
                    logo: url,
                    address: '',
                    })
                    Alert.alert('Restaurante Criado');
                    navigation.navigate("managerRestaurant")
                } else {
                    console.error("API ERROR", data.error);
                    setLoading(false)
                    navigation.navigate("managerRestaurant")
                }
            } else {
                Alert.alert('Estão faltando informações, por favor preencha corretamente');
                setLoading(false)
                return
            }
        } catch (error) {
            Alert.alert('Restaurante não cadastrado, verifique as informações');
        }
    }  

    const handleUpload = async () => {
        try {
            
        } catch (error) {
            
        }
    }
    
    const Upload = () => {
      const [uploadUrl, setUploadUrl] = useState(false);
      const uploadyContext = useContext(UploadyContext);
      
      useItemFinishListener((item) => {
        const response = JSON.parse(item.uploadResponse.data);
        console.log(`item ${item.id} finished uploading, response was: `, response);
        setUploadUrl(response.url);
      });
      
      useItemErrorListener((item) => {
        console.log(`item ${item.id} upload error !!!! `, item);
        setLogo(item.file.uri)
        console.log("logo",logo);
        });
      
        useItemStartListener((item) => {
          console.log(`item ${item.id} starting to upload,name = ${item.file.name}`);
        });
      
        const pickFile = useCallback(async () => {
          try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.images],
            });
      
            uploadyContext.upload(res);
            
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              console.log("User cancelled the picker, exit any dialogs or menus and move on");
            } else {
              throw err;
            }
          }
        }, [uploadyContext]);
      
        return (
          <>
            <TouchableOpacity style={styles.input} onPress={pickFile}>
                            <Text >{logo ? logo : "Selecione a Logo"}</Text>  
                        </TouchableOpacity>
            {uploadUrl && <Image source={{ uri: uploadUrl }} style={styles.uploadedImage} />}
          </>
        );
      };

    

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
                    placeholder="Endereço"
                    value={address}
                    onChangeText={setAddress}
                    />   

                <NativeUploady>
                    <Upload/>
                </NativeUploady>
    
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


