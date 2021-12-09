import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Homescreen from './screens/homescreen';
import ISSTracker from './screens/ISStracker';
import Meteorscreen from './screens/meteorscreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <stack.Screen name='Home' component={Homescreen} />
          <stack.Screen name='ISSLocation' component={ISSTracker} />
          <stack.Screen name='Meteors' component={Meteorscreen} />
        </stack.Navigator>
      </NavigationContainer>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
