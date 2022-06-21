import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ( ) => {
  
   
  
  
    return (
        // headerShown: false oculta las 3 rayitas de arriba
        <Drawer.Navigator  screenOptions={{ headerShown: true } }>
            {/*  <Drawer.Screen name="Navigator"  component={Navigator} />  */}
            
            <Drawer.Screen name="BottomTabNavigation"  component={BottomTabNavigation} />
            

        </Drawer.Navigator>


    )
}

export default DrawerNavigation;