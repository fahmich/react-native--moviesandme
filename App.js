import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Components/Search';
import FilmDetail from './Components/FilmDetail ';

const Stack = createStackNavigator();
export default class App extends React.Component   {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Rechercher+">
          <Stack.Screen name="Rechercher+" component={Search}/>  
          <Stack.Screen name="FilmDetail" component={FilmDetail}/> 

          </Stack.Navigator>
      </NavigationContainer>
    );
  }
  }
 

