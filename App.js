import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register'
import Details from './screens/Details';
import { Provider } from 'react-redux'
import {store} from './store'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Welcome' }}
        />
       <Stack.Screen 
       name="Details"
       component={Details}
       />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};


export default App;