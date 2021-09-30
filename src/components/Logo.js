import React from 'react';
import {Image} from 'react-native';

const Logo = () => {
  return (
    <Image
      style={{width: 150, height: 45}}
      source={{uri: 'https://www.google.com.br/google.jpg'}}
    />
  );
};

export default Logo;
