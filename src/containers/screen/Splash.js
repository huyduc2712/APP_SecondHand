import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import color from '../../styles/color';
import Logo from '../../../assets/images/logo.png';

const Splash = ({navigation}) => {

  React.useEffect(() => {
    setTimeout(()=> navigation.navigate('Onboarding'), 3000)
  })


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.BLACK,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    > 
      <StatusBar hidden={true}/>
      <Image
        source={Logo}
        style={{width: 100, height: 100, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
