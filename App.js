import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavi from './src/navigation/LoginNavi';
import MyConText from './src/MyConText';
import {MenuProvider} from 'react-native-popup-menu';

export default function App() {
  return (
    <NavigationContainer>
      <MyConText>
        <MenuProvider>
          <LoginNavi />
        </MenuProvider>
      </MyConText>
    </NavigationContainer>
  );
}
