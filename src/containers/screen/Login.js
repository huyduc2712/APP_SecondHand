import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useContext} from 'react';
import color from '../../styles/color';
import Button from '../../components/Button';
import {postData, baseURL} from '../../api/helper';
import {checkEmptyForm} from '../../validate';
import {AppContext} from '../../MyConText'







const Login = ({navigation}) => {
  const [information, setInformation] = useContext(AppContext);
  const [user, useUser] = useState('');
  const [pass, usePass] = useState('');

  const handleLogin = async () => {
    if (
      checkEmptyForm(
        [user, pass],
        ['Bạn chưa nhâp tài khoản', 'Bạn chưa nhập mật khẩu'],
      )
    ) {
      const data = await postData(`${baseURL}login.php`, {
        TaiKhoan: user,
        MatKhau: pass,
      });
      if (data.code) alert(data.message);
      else {
        setInformation(data)
        navigation.navigate('BottomNavi')
      }
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={'white'}
        barStyle="dark-content"
      />
      <Text style={styles.loginLabel}>Đăng nhập</Text>
      <TextInput
        style={styles.EmailInput}
        placeholder="Email hoặc số điện thoại"
        onChangeText={useUser}
        value={user}
      />
      <View style={styles.PasswordInputContainer}>
        <TextInput
          style={styles.PasswordInput}
          placeholder="Password"
          onChangeText={usePass}
          value={pass}
          secureTextEntry={true}
        />
        <Image
          style={styles.imageEye}
          source={require('../../../assets/images/Eye.png')}
        />
      </View>
      <View style={styles.forgotContainer}>
        <Text></Text>
        <Text style={StyleSheet.create({color: color.MAIN})}>
          Quên mật khẩu?
        </Text>
      </View>

      <Button
        styleCustom={{marginTop: 75}}
        on_press={handleLogin}
        btn_text={'Đăng nhập'}
      />

      <TouchableOpacity style={styles.SignupButton}>
        <Text style={styles.SignupButtonText}>Đăng ký tài khoản</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Image
            style={styles.buttonGG}
            source={require('../../../assets/images/buttonGG.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.buttonGG}
            source={require('../../../assets/images/buttonFB.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    alignItems: 'flex-end',
  },

  SignupButtonText: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 12,
  },

  SignupButton: {
    width: '100%',
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  LoginButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },

  LoginButton: {
    width: '100%',
    height: 40,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.MAIN,
    borderRadius: 60,
  },

  forgotContainer: {
    flexDirection: 'row',
    height: 25,
    justifyContent: 'space-between',
    marginTop: 50,
  },

  // checkboxText : {
  //     margin : 8,
  // },

  // checkbox : {
  //     alignSelf : 'center',
  // },

  // checkboxContainer: {
  //     flexDirection: 'row',
  //     marginTop: 17,
  // },

  PasswordInputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
  },

  imageEye: {
    width: 20,
    height: 20,
    top: 48,
    right: 24,
  },

  PasswordInput: {
    width: '100%',
    height: 40,
    marginTop: 32,
    fontSize: 15,
    borderBottomWidth: 1,
    color: '#333333',
    borderBottomColor: '#E9E9E9',
  },

  EmailInput: {
    width: '100%',
    height: 40,
    marginTop: 61,
    fontSize: 15,
    borderBottomWidth: 1,
    color: '#333333',
    borderColor: '#E9E9E9',
  },

  loginLabel: {
    marginTop: 70,
    height: 28,
    width: 126,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '600',
    color: color.MAIN,
  },

  image: {
    marginTop: 17,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
});
