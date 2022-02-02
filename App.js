/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import AddEditTask from './screens/AddEditTask';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import TaskDetails from './screens/TaskDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="AddEdit"
            component={AddEditTask}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Details"
            component={TaskDetails}
            options={{title: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
