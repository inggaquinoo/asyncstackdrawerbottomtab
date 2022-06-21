import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Logout from '../screens/Logout';
import DrawerNavigation from './DrawerNavigation';
import EditUser from '../screens/EditUser';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
        // headerShown: false -> oculta el encabezado de arriba del stack
        <Stack.Navigator  screenOptions={{ headerShown: true } } >
            <Stack.Screen name="Login"  options={{ title: "Hoshii Partners" }} component={Login} />
            <Stack.Screen name="Logout" component={Logout} />
            
            {/* <Stack.Screen name="BottomTabNavigation" options={{ title: "Hoshii Partners" }} component={BottomTabNavigation} />  */}
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            <Stack.Screen name="EditUser" component={EditUser} />
            
        </Stack.Navigator>
    
  )
}

export default Navigator;