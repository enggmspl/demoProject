import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from "../Profile";

// navigation stack
const AppStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                header: null,
            },
        },


    },
    {
        initialRouteName: 'Profile',
    },
);



const Routes = createAppContainer(
    createSwitchNavigator({
        App: AppStack,
    }),
);
export default Routes;