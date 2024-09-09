import { ImageBackground } from 'react-native';
import React from 'react';

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('./Background.jpg')}
      style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}
      blurRadius={7}
    >
      {/* allow to contain the child components*/}
      {children}
    </ImageBackground>
  );
}