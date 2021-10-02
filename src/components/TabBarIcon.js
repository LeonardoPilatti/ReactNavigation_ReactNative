import React from 'react';
import {View, Text, Image} from 'react-native';

const TabBarIcon = props => {
  let srcImage = null;

  switch (props.name) {
    case 'Home':
      srcImage = require('../assets/home.png');
      break;
    case 'Sobre':
      srcImage = require('../assets/interface.png');
      break;
  }
  return <Image source={srcImage} style={{width: 24, height: 24}} />;
};

export default TabBarIcon;
