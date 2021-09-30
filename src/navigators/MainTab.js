import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';

const MainTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let imgSource = null;

          switch (route.name) {
            case 'TabHome':
              imgSource = require('../assets/home.png');
              break;
            case 'TabAbout':
              imgSource = require('../assets/interface.png');
              break;
          }

          return <Image source={imgSource} style={{width: 24, height: 24}} />;
        },
      })}>
      <Tab.Screen name="TabHome" component={TabHomeScreen} />
      <Tab.Screen name="TabAbout" component={TabAboutScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
