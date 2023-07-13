import React, { useState, useCallback, useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import storageImage from '../services/storage'
import DocumentPicker from "react-native-document-picker";
import NativeUploady, {
    UploadyContext,
    useItemFinishListener,
    useItemStartListener,
    useItemErrorListener,
  } from "@rpldy/native-uploady";
const Upload = ({setLogo}) => {
    const [uploadUrl, setUploadUrl] = useState(false);
    const [image, setImage] = useState(false);
    const uploadyContext = useContext(UploadyContext);
          
    useItemFinishListener((item) => {
      const response = JSON.parse(item.uploadResponse.data);
      console.log(`item ${item.id} finished uploading, response was: `, response);
      setUploadUrl(response.url);
    });
    
    useItemErrorListener((item) => {
      console.log(`item ${item.id} upload error !!!! `, item);
      setImage(item.file.uri)
      setLogo(item.file.uri)
      console.log("logo",uploadUrl);
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
          <TouchableOpacity style={styles.input} onPress={pickFile} >
              <Text image={image}>{image ? image : 'Select Image'}</Text>  
          </TouchableOpacity>
          {/* {<Image source={{ uri: image }} />} */}
        </>
      );
  };

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

  export default Upload