import React, { Component } from 'react';
import {Text,Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './screens/Home'
import slideScreen from './screens/Slide'
import AppleScreen from './screens/Apple'
import HarvestScreen from './screens/Harvest'
import CollectionScreen from'./screens/Collection'
export class App extends Component {
  render() {
    return (
      <View>
        <Text>App page</Text>
      </View>
    )
  }
}


const appStackNavigator = createStackNavigator({
  
  Home:{
    screen:HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerShown: false //this will hide the header
    },
  },
  Apple:{
    screen:AppleScreen,
    navigationOptions: {
      title: 'Apple',
      headerShown: false //this will hide the header
    },
  },
  Harvest:{
    screen:HarvestScreen,
    navigationOptions: {
      title: 'Apple',
      headerShown: false //this will hide the header
    },
  },
  Collection:{
    screen:CollectionScreen,
    navigationOptions: {
      title: 'Apple',
      headerShown: false //this will hide the header
    },
  },
 
})

const AppDrawerNavigator = createDrawerNavigator({
  Home:{screen: appStackNavigator},
 },
 {
     contentComponent: slideScreen,
     drawerWidth: Dimensions.get('window').width - 100,  
     drawerPosition:'left' 
 }
);




export default createAppContainer(AppDrawerNavigator)
