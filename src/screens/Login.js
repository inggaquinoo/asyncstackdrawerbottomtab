import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';


const Login = ({ navigation }) => {
  
const [name, setName] = useState('')

useEffect(() => {
    getData();  
  
}, [])



const getData = () => {
    try {
        
        AsyncStorage.getItem('dataStorage')
        .then(value => {
            //Si tiene datos o valores
            if (value != null)
            {
                navigation.navigate('DrawerNavigation',{
                    //BottomTabNavigation está dentro de DrawerNavigation
                    screen: 'BottomTabNavigation',
                    params: {
                                //Home esta dentro de BottomTabNavigation el cual
                                //está dentro de DrawerNavigation
                        screen: 'Profile',
                        params: {
                                    Names_:name,
                                }
                        
                            }
                })
            }
        })

    } catch (error) {
        alert(error)
    }

}


const setData = async() => {

    if(name.length == 0)
    {
        alert('Please type your name!')
    }
    else
    {
        try {
                var user = {
                    NamesJ: name
                }
                                             
                await  AsyncStorage.setItem('dataStorage',JSON.stringify(user))

                                    //DrawerNavigation = hacia donde va
                navigation.navigate('DrawerNavigation',{
                    //BottomTabNavigation está dentro de DrawerNavigation
                    screen: 'BottomTabNavigation',
                    params: {
                                //Home esta dentro de BottomTabNavigation el cual
                                //está dentro de DrawerNavigation
                        screen: 'Profile',
                        params: {
                                    id:'Login',
                                    Names_:name
                                }
                        
                            }
                })
                
                {/*

                navigation.navigate('Root', {
                    screen: 'Settings',
                    params: {
                      screen: 'Sound',
                      params: {
                        screen: 'Media',
                      },
                    },
                  });

                */}

            } catch (error) {
                alert(error);
            }
    }

}


  return (
    <View>

    <TextInput
    placeholder='Type Name'
    onChangeText={(value) => setName(value)}
    >
    </TextInput>


    <TouchableOpacity
    onPress={setData}
    >
        <Text
        style = {{ fontSize: 40 }}
        >Login</Text>
    </TouchableOpacity>



{/*
    <TouchableOpacity
    onPress={() => navigation.navigate('Profile') }
    >
        <Text>Hacia Profile</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
    onPress={() => navigation.navigate('BottomTabNavigation') }
    >
        <Text>Hacia BottomTabs</Text>
    </TouchableOpacity>


  */}
    
    </View>
  )
}

export default Login;