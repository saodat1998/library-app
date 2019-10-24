import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import Categories from '../screens/Categories';
export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Categories: {
      screen: Categories
    }
  }),
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
