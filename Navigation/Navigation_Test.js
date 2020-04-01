import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';  
import { Provider } from 'react-redux'
import Store from '../Store/configureStore'
import Test from '../Components/Test';

const Stack = createStackNavigator();
 export default class Navigation_Test extends React.Component   {
  render() {
    return (
      <Provider store={Store}>
        <Stack.Navigator initialRouteName="Test-">
          <Stack.Screen name="Test-" component={Test}/>  
         </Stack.Navigator>
       </Provider>
    );   
  }
  }
 

