import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';
import tabConfigScreen from '../pages/TabConfigScreen';

const MainTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="TabAbout" component={TabAboutScreen} />
      <Tab.Screen name="TabHome" component={TabHomeScreen} />
      <Tab.Screen name="TabConfigScreen" component={tabConfigScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;

// import React from 'react';
// import {Image} from 'react-native';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import TabHomeScreen from '../pages/TabHomeScreen';
// import TabAboutScreen from '../pages/TabAboutScreen';
// import tabConfigScreen from '../pages/TabConfigScreen';

// const MainTab = () => {
//   const Tab = createBottomTabNavigator();

//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let imgSource = null;

//           switch (route.name) {
//             case 'TabHome':
//               imgSource = require('../assets/home.png');
//               break;
//             case 'TabAbout':
//               imgSource = require('../assets/interface.png');
//               break;
//           }

//           return <Image source={imgSource} style={{width: 24, height: 24}} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//       <Tab.Screen
//         name="TabAbout"
//         options={{tabBarLabel: 'Sobre', title: 'Sobre'}}
//         component={TabAboutScreen}
//       />
//       <Tab.Screen
//         name="TabHome"
//         options={{tabBarLabel: 'Home', title: 'Home'}}
//         component={TabHomeScreen}
//       />
//       <Tab.Screen
//         name="TabConfigScreen"
//         options={{tabBarLabel: 'Config', title: 'Config'}}
//         component={tabConfigScreen}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MainTab;
