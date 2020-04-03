import * as React from 'react';
 import { createStackNavigator } from '@react-navigation/stack';

import Favorites from '../Components/Favorites';
import FilmDetail from '../Components/FilmDetail ';
import { Provider } from 'react-redux'
import Store from '../Store/configureStore'

 const Stack = createStackNavigator();
 export default class Navigation_Favorite extends React.Component{

    render() {
        return (
          <Provider store={Store}>
            <Stack.Navigator initialRouteName="Favorites">
               <Stack.Screen name="Favorites" component={Favorites}/> 
               <Stack.Screen name="FilmDetail" component={FilmDetail}/> 
            </Stack.Navigator>
           </Provider>
        );   
       }
      }
 
  