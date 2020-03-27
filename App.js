import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Components/Search';
  
function _Search() {
  return (<Search/> );
}
const Stack = createStackNavigator();
  
export default class App extends React.Component {

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Searching">
          <Stack.Screen 
          name="Rechercher+" 
          component={_Search}
           />
         </Stack.Navigator>
      </NavigationContainer>
    );
  }
  }
 

