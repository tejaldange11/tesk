/*
 * React Native Meeting App
 * navigation.js
 * ATSPL
 */

import React from 'react';
import {Dimensions, Easing, Animated} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login  from '../screens/login'
import Login1  from '../screens/login1'

import SignIn  from '../screens/signIn'
const NaviAppStack = createStackNavigator({



    Login:Login,
    SignIn:SignIn,
    Login1:Login1,
},{
    initialRouteName: "SignIn"


});


/*const NaviApp=createDrawerNavigator({
        homedrawer: {
            screen: NaviAppStack,
        },
    },Dashboard
    {
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerLockMode:'locked-closed',
        contentComponent: Drawer1
    }

);*/


export default createAppContainer(NaviAppStack);

