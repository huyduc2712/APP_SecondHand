import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import List from '../containers/screen/List';
import Favorite from '../containers/screen/Favorite';
import Post from '../containers/screen/Post';
import Hello from '../containers/screen/Hello';
import Account from '../containers/screen/Account';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import color from '../styles/color';
const Tab = createMaterialBottomTabNavigator();

const TAB_NAVIGATION = [
  {
    name: 'Home',
    component: List,
    label: 'Trang chủ',
    img: require('../../assets/images/bt_house.png'),
  },
  {
    name: 'Favorite',
    component: Favorite,
    label: 'Yêu thích',
    img: require('../../assets/images/bt_heart.png'),
  },
  {
    name: 'Post',
    component: Post,
    icon: require('../../assets/images/navi_add.png'),
    check: true,
  },
  {
    name: 'Notify',
    component: Hello,
    label: 'Thông báo',
    img: require('../../assets/images/bt_bell.png'),
  },
  {
    name: 'User',
    component: Account,
    label: 'Tài khoản',
    img: require('../../assets/images/bt_person.png'),
  },
];

const BottomNavi = () => {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={color.MAIN}
      labeled={false}
      inactiveColor="#333333"
      barStyle={{
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E2EAF8',
        activeColor: color.MAIN,
        inactiveColor: 'red',
        padding: 0,
        position: 'absolute',
        height: 60,
        alignItems: 'center',
      }}>
      {TAB_NAVIGATION.map(item => {
        return (
          <Tab.Screen
            name={item.name}
            component={item.component}
            key={item.name}
            options={{
              tabBarIcon: ({color}) => (
                <View
                  style={{
                    width: 76,
                    top: -5,

                    alignItems: 'center',
                  }}>
                  {item.check ? (
                    <Image
                      style={{height: 40, width: 40, marginBottom: 10}}
                      source={item.icon}
                      resizeMode={'contain'}
                    />
                  ) : (
                    <View>
                      <Image
                        style={{
                          tintColor: color,
                          alignSelf: 'center',

                          height: 24,
                          width: 24,
                        }}
                        source={item.img}
                        resizeMode={'stretch'}
                      />
                      <Text
                        style={{color: color, fontSize: 10, fontWeight: '500'}}>
                        {item.label}
                      </Text>
                    </View>
                  )}
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomNavi;
