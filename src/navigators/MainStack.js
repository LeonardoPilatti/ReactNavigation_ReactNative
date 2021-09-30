import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        /// esse screenOptions é para ele ficar com um valor padrão, caso tenha o options dentro do mainstack, então ele irá colocar esses options do mainstack;
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ff0000',
          height: 80,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 16,
        },
      }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //// essas options é para alterar o header;
          title: 'Início',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#6666ff', height: 75},
          headerTitleStyle: {color: '#fff', fontSize: 23, fontWeight: 'bold'},
        }}
      />
      <MainStack.Screen
        name="About"
        component={AboutScreen}
        options={({route}) => ({
          //// aqui estou pegando das props que foi para o about e colocando ele como titulo no header;
          title: route.params?.name ?? 'Visitante',
        })}
      />
    </MainStack.Navigator>
  );
};
