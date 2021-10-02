import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import Store from './src/Store';

import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainStack />
        {/* <MainTab /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
