import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';

const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};
