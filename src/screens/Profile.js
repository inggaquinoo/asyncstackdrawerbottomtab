import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';


const Profile = ({navigation, route}) => {


const [name, setName] = useState('')

useEffect(() => {
  getData()
  }, [])


const getData = () => {

      try {
        
        AsyncStorage.getItem('dataStorage')
        .then(value => {
          if(value != null)
              {
              let user = JSON.parse(value)
              setName(user.NamesJ)
              }
                      })
      
      }catch (error) {
        alert(error)
      }

}


const removeData = async() => {
      try {
                  //Para borrar 1 solo dato
                  //await AsyncStorage.removeItem('dataStorage');
                  //Para borrar varios datos de un objeto
                  await AsyncStorage.clear();    
                  
                  navigation.navigate('Login');
           } catch (error) {
                          alert(error)
                          }
                              }

//route.params.id regresa el nombre de la pagina en donde estuve
   if(route.params.id == "EditUser")
      {
        getData();
      }


 return (
    <View>
        
        <Text
        value={name}
        >Usuario: {name}</Text>


        <TextInput 
          onChangeText={(value) => setName(value)}
          value={name}
        />
        
        
        <TouchableOpacity
        onPress={() => navigation.navigate('EditUser')}
        >
            <Text
            style = {{ fontSize: 40 }}
            >Edit</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
        onPress={removeData}
        >
            <Text
            style = {{ fontSize: 40 }}
            >Logout</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Profile;