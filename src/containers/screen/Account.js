import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import color from '../../styles/color';
import Bg2 from '../../../assets/images/bg2.jpg';
import Users from '../../../assets/images/user.png';
import Users2 from '../../../assets/images/user2.png';
import Bag from '../../../assets/images/bag.png';
import Next from '../../../assets/images/next.png';
import Shopping from '../../../assets/images/shopping.png';
import Loa from '../../../assets/images/megaphone.png';
import Password from '../../../assets/images/unlock.png';
import About from '../../../assets/images/info.png';
import {AppContext} from '../../MyConText';
const Account = ({navigation}) => {
  const [information] = useContext(AppContext);
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
      <View
        style={{
          height: '100%',
          paddingBottom: 100,
        }}>
        <ImageBackground source={Bg2} style={{width: '100%', height: 286}}>
          <SafeAreaView>
            <View
              style={{
                height: 54,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{color: color.WHITE, fontWeight: '700', fontSize: 18}}>
                {'Tài khoản'}
              </Text>
            </View>
            <View style={{paddingHorizontal: 16}}>
              <View
                style={{
                  backgroundColor: color.WHITE,
                  height: 141,
                  marginTop: 8,
                  borderRadius: 4,
                  padding: 12,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={Users} style={{width: 54, height: 54}} />
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 12,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '700',
                        color: color.TEXT_PRIMARY,
                      }}>
                      {information.HoTen}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        width: 70,
                        fontSize: 12,
                        fontWeight: '500',
                        color: color.BLACK,
                        marginTop: 8,
                        backgroundColor: '#FBEA9D',
                        justifyContent: 'center',
                      }}>
                      {'Thành viên'}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 76,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      width: 115,
                      height: 36,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: color.TEXT_PRIMARY,
                      }}>
                      {'886'}
                    </Text>
                    <Text
                      style={{
                        marginTop: 2,
                        fontSize: 12,
                        fontWeight: '400',
                        color: color.TEXT_SECOND,
                      }}>
                      {'Đã bán'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      width: 115,
                      height: 36,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: color.TEXT_PRIMARY,
                      }}>
                      {'12,233'}
                    </Text>
                    <Text
                      style={{
                        marginTop: 2,
                        fontSize: 12,
                        fontWeight: '400',
                        color: color.TEXT_SECOND,
                      }}>
                      {'Yêu thích'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      width: 115,
                      height: 36,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: color.TEXT_PRIMARY,
                      }}>
                      {information.TongDiemDanhGia/information.SoLuotDanhGia}
                    </Text>
                    <Text
                      style={{
                        marginTop: 2,
                        fontSize: 12,
                        fontWeight: '400',
                        color: color.TEXT_SECOND,
                      }}>
                      {'Đánh gía'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>

        <View
          style={{
            backgroundColor: '#E2EAF8',
            height: '100%',
            paddingHorizontal: 16,
            paddingTop: 4,
          }}>
          <View
            style={{
              flexDirection: 'column',
              backgroundColor: color.WHITE,
              borderRadius: 4,
              padding: 16,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('OnSale')}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: 40,
                  borderBottomWidth: 1,
                  borderColor: color.BORDER_BOTTOM,
                }}>
                <Image
                  source={Bag}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <View
                  style={{
                    width: 251,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      color: color.TEXT_PRIMARY,
                    }}>
                    {'Sản phẩm đang bán'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Image source={Next} style={{width: 20, height: 20}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: 40,
                  borderBottomWidth: 1,
                  borderColor: color.BORDER_BOTTOM,
                  marginTop: 16,
                }}>
                <Image
                  source={Shopping}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <View
                  style={{
                    width: 251,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      color: color.TEXT_PRIMARY,
                    }}>
                    {'Sản phẩm đã mua'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Image source={Next} style={{width: 20, height: 20}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: 40,
                  borderBottomWidth: 1,
                  borderColor: color.BORDER_BOTTOM,
                  marginTop: 16,
                }}>
                <Image
                  source={Users2}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <View
                  style={{
                    width: 251,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      color: color.TEXT_PRIMARY,
                    }}>
                    {'Thông tin cá nhân'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Image source={Next} style={{width: 20, height: 20}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: 40,
                  borderBottomWidth: 1,
                  borderColor: color.BORDER_BOTTOM,
                  marginTop: 16,
                }}>
                <Image
                  source={Loa}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <View
                  style={{
                    width: 251,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      color: color.TEXT_PRIMARY,
                    }}>
                    {'Hỗ trợ khách hàng'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Image source={Next} style={{width: 20, height: 20}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: 40,
                  borderBottomWidth: 1,
                  borderColor: color.BORDER_BOTTOM,
                  marginTop: 16,
                }}>
                <Image
                  source={Password}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <View
                  style={{
                    width: 251,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      color: color.TEXT_PRIMARY,
                    }}>
                    {'Đổi mật khẩu'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Image source={Next} style={{width: 20, height: 20}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  marginTop: 16,
                }}>
                <Image
                  source={About}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <View
                  style={{
                    width: 251,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      color: color.TEXT_PRIMARY,
                    }}>
                    {'Về chúng tôi'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Image source={Next} style={{width: 20, height: 20}} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {
             navigation.reset({
              index: 0,
              routes: [{
                name: 'Login'
              }]
            })
          }}>
            <View
              style={{
                width: '100%',
                height: 50,
                backgroundColor: color.WHITE,
                marginTop: 12,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, fontWeight: '400', color: '#FF424E'}}>
                Đăng xuất
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({});
