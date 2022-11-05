import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const EditUser = ({ navigation }) => {

    //const params = route.params;
    //console.log(route);
    //console.log(params.params.NamesProfile);
    
    const [name, setName] = useState('')


    useEffect(() => {
      getData();
          
    }, [])
    

    const getData = () => {
        try {
            AsyncStorage.getItem('dataStorage')
            .then(value => {
                 if (value != null)
                    {
                        let user = JSON.parse(value)
                        setName(user.NamesJ)
                    }

                })
                

        } catch (error) {
            alert(error)
        }
    }

    const update = async() => {
        try {
            if (name.length == 0)
            {
                alert('Please, type your name!')
            }
            else
            {
                var user = {
                    //////////////////////////////////////////
                    //GRAN LECCION!!! NamesJ debe ser la misma
                    //variable en todos los archivos ya sea 
                    // en las funciones de setData ó update
                    ////////////////////////////////////////
                    NamesJ: name
                }   
                
                await AsyncStorage.mergeItem('dataStorage',JSON.stringify(user))
                alert('Success, your data has been updated.')
                                    //Profile = hacia donde va
                navigation.navigate('Profile',{
                    //No es necesario colocar explicitamente la palabra "params"
                    //igual cuando revisas el route los params estan inherentes
                    //salvo que haya varias jerarquías o requieras enviar un dato
                    //hacia una pagina espefica o hacia dentro de un drawer o bottomtab
                    //params: {
                    id: 'EditUser',    
                    message: "updated"
                    //}
                })

            }

        } catch (error) {
            alert(error)
        }

    }
    
    return (
    <View>
      <TextInput 
      onChangeText={(value) => setName(value)}
      value={name}
      />

      <TouchableOpacity
      onPress={update}
      >
        <Text>Update</Text>
      </TouchableOpacity>

    </View>
  )
}

export default EditUser;