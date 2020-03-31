import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail ';

import { Provider } from 'react-redux'
import Store from '../Store/configureStore'

const Stack = createStackNavigator();
 export default class Navigation_Search extends React.Component   {
  render() {
    return (
      <Provider store={Store}>
        <Stack.Navigator initialRouteName="Rechercher+">
          <Stack.Screen name="Rechercher+" component={Search}/>  
          <Stack.Screen name="FilmDetail" component={FilmDetail}/> 
        </Stack.Navigator>
       </Provider>
    );   
  }
  }
 

