import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Chats from '../screens/Chats';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    
    return (
    
    // headerShown: false -> oculta el encabezado de arriba pero solo de los Tabs osea 
    //la segunda fila de encabezados
    <Tab.Navigator screenOptions={{ headerShown: false } } >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>


  )
}

export default BottomTabNavigation;