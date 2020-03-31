import * as React from 'react';
import {StyleSheet,Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Components/Search';
import FilmDetail from './Components/FilmDetail ';

import { Provider } from 'react-redux'
import Store from './Store/configureStore'

import Navigation_Search from './Navigation_Search';
import Navigation_Favorite from './Navigation_Favorite';
import { Ionicons } from '@expo/vector-icons';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class App extends React.Component   {
  render() {
    return (

      <NavigationContainer>         
          <Tab.Navigator
          screenOptions={({ route }) => ({tabBarIcon: ({ focused, color, size }) => {
               let  sourceImage  
               if (route.name === 'Home') {
                sourceImage  = require('./Images/ic_search.png')
              } else if (route.name === 'Favorite') {
                sourceImage  = require('./Images/ic_favorite.png')
              } 
              // You can return any component that you like here!
              return ( <Image
                          style={styles.icon}
                          source={sourceImage}
                   />);
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',activeBackgroundColor:'gray',
            inactiveTintColor: 'gray', 
          }}
          >
            <Tab.Screen name="Home" component={Navigation_Search} />
            <Tab.Screen name="Favorite" component={Navigation_Favorite} />

          </Tab.Navigator> 
      </NavigationContainer>  
   
 
    );   
  }
  }
  const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30
    }
  })

