import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Bg from '../../../assets/images/background.png';
import color from '../../styles/color';
import Logo from '../../../assets/images/logo.png';
import Button from '../../components/Button';
import ButtonOutline from '../../components/ButtonOutline';
const Onboarding = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
        <ImageBackground source={Bg} style={{width: '100%', height: '100%'}} />
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'column',
            position: 'absolute',
            alignItems: 'center',
            width: '100%',
            padding: 16,
            height:'100%',
            justifyContent: 'flex-end',
            paddingVertical: 50
          }}
        >
          <Image
            source={Logo}
            style={{width: 100, height: 100, resizeMode: 'contain'}}
          />
          <Text
            style={{
              marginTop: 8,
              color: color.WHITE,
              textAlign: 'center',
              alignItems: 'center',
              fontSize: 14,
              fontWeight: '400',
            }}
          >
            {
              'Thật tuyệt vời khi có bạn!\n Đăng nhập để trải nghiệm những điều tuyệt vời từ\n ứng dụng của chúng tôi '
            }
          </Text>
          <View
            style={{
              marginTop: 48,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button on_press={() => null} btn_text={'Đăng ký'} />
            <ButtonOutline on_press={() => navigation.navigate('Login')} btn_text={'Đăng nhập'} />
          </View>
        </View>

    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
