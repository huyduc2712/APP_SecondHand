import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import color from '../../styles/color';
import {AppContext} from '../../MyConText';
import {baseURL, getData, postData} from '../../api/helper';
import {useEffect} from 'react';


const Detail = ({navigation, route}) => {
  const [information] = useContext(AppContext);
  const item = route.params;
  const [liked, setLiked] = useState(item.checkFavorite)
 
  const handleLike = async () => {
    const data = await postData(`${baseURL}CreatFavorite.php`, {
      MaTaiKhoan: information.MaTaiKhoan,
      MaBaiDang: item.MaBaiDang

    });
    console.log(data)
    if(data.code == '2') setLiked(true)
    else alert(data.message)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item.img}}
            resizeMode="contain"
            style={{width: '100%', height: 375, alignSelf: 'center'}}
          />
        </View>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={StyleSheet.create({
                marginHorizontal: 10,
                tintColor: color.BLACK,
              })}
              source={require('../../../assets/images/backIcon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLike}>
            <Image
              style={StyleSheet.create({marginHorizontal: 10, tintColor: liked ? color.MAIN : color.BLACK})}
              source={require('../../../assets/images/Heart2.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.Namecontainer}>
          <Text
            numberOfLines={2}
            style={StyleSheet.create({
              fontWeight: '600',
              fontSize: 18,
              color: '#000000',
            })}>
            {item.TieuDe}
          </Text>
          <View style={styles.PriceContainer}>
            <Text
              style={StyleSheet.create({
                fontWeight: '400',
                fontSize: 13,
                color: '#8592A6',
                backgroundColor: '#F0F2F5',
                padding: 5,
              })}>
              Giày Authentic
            </Text>
            <Text
              style={StyleSheet.create({
                fontWeight: '600',
                fontSize: 20,
                color: '#000000',
              })}>
              {item.Gia}đ
            </Text>
          </View>
        </View>
        <View style={styles.voucherContainer}>
          <TouchableOpacity>
            <Image
              style={StyleSheet.create({width: '100%'})}
              resizeMode="cover"
              source={require('../../../assets/images/voucher.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.accountContainer}>
          <View style={styles.accountTopContainer}>
            <View style={styles.accountDetail}>
              <Image source={require('../../../assets/images/avatar.png')} />
              <View style={StyleSheet.create({marginLeft: 8})}>
                <Text
                  style={StyleSheet.create({
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: '#000000',
                  })}>
                  Vua Hàng Hiệu
                </Text>
                <View
                  style={StyleSheet.create({
                    flexDirection: 'row',
                    alignItems: 'center',
                  })}>
                  <Text>093*******</Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../assets/images/EyeIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Image
              source={require('../../../assets/images/crown.png')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.accountBottomContainer}>
            <View
              style={StyleSheet.create({
                flexDirection: 'row',
                alignItems: 'center',
              })}>
              <Image source={require('../../../assets/images/cart.png')} />
              <Text
                style={StyleSheet.create({
                  fontWeight: '400',
                  fontSize: 12,
                  color: '#000000',
                  marginLeft: 4,
                })}>
                Đã bán : 886
              </Text>
            </View>
            <View
              style={StyleSheet.create({
                flexDirection: 'row',
                alignItems: 'center',
              })}>
              <Image source={require('../../../assets/images/favShop.png')} />
              <Text
                style={StyleSheet.create({
                  fontWeight: '400',
                  fontSize: 12,
                  color: '#000000',
                  marginLeft: 4,
                })}>
                Thích : 12,233
              </Text>
            </View>
            <View
              style={StyleSheet.create({
                flexDirection: 'row',
                alignItems: 'center',
              })}>
              <Image source={require('../../../assets/images/star.png')} />
              <Text
                style={StyleSheet.create({
                  fontWeight: '400',
                  fontSize: 12,
                  color: '#000000',
                  marginLeft: 4,
                })}>
                Đánh giá : 4.5
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View
            style={StyleSheet.create({
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            })}>
            <Text
              style={StyleSheet.create({
                fontWeight: '600',
                fontSize: 16,
                color: '#000000',
              })}>
              Mô tả chi tiết
            </Text>
            <Text
              style={StyleSheet.create({
                fontWeight: '600',
                fontSize: 13,
                color: color.MAIN,
              })}>
              Chi tiết
            </Text>
          </View>
          <View style={StyleSheet.create({marginTop: 8})}>
            <View
              style={StyleSheet.create({
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}>
              <View
                style={StyleSheet.create({
                  flexDirection: 'row',
                  alignItems: 'center',
                })}>
                <Image source={require('../../../assets/images/color.png')} />
                <Text
                  style={StyleSheet.create({
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                    marginLeft: 8,
                  })}>
                  Màu
                </Text>
              </View>
              <Text
                style={StyleSheet.create({
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#000000',
                })}>
                {item.Mau}
              </Text>
            </View>
          </View>
          <View style={StyleSheet.create({marginTop: 8})}>
            <View
              style={StyleSheet.create({
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}>
              <View
                style={StyleSheet.create({
                  flexDirection: 'row',
                  alignItems: 'center',
                })}>
                <Image source={require('../../../assets/images/size.png')} />
                <Text
                  style={StyleSheet.create({
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                    marginLeft: 8,
                  })}>
                  Size
                </Text>
              </View>
              <Text
                style={StyleSheet.create({
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#000000',
                })}>
                {item.Size}
              </Text>
            </View>
          </View>
          <View style={StyleSheet.create({marginTop: 8})}>
            <View
              style={StyleSheet.create({
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}>
              <View
                style={StyleSheet.create({
                  flexDirection: 'row',
                  alignItems: 'center',
                })}>
                <Image source={require('../../../assets/images/area.png')} />
                <Text
                  style={StyleSheet.create({
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                    marginLeft: 8,
                  })}>
                  Khu vực
                </Text>
              </View>
              <Text
                style={StyleSheet.create({
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#000000',
                })}>
                {item.KhuVuc}
              </Text>
            </View>
          </View>
          <View style={StyleSheet.create({marginTop: 8})}>
            <View
              style={StyleSheet.create({
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}>
              <View
                style={StyleSheet.create({
                  flexDirection: 'row',
                  alignItems: 'center',
                })}>
                <Image source={require('../../../assets/images/brand.png')} />
                <Text
                  style={StyleSheet.create({
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                    marginLeft: 8,
                  })}>
                  Thương hiệu
                </Text>
              </View>
              <Text
                style={StyleSheet.create({
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#000000',
                })}>
                {item.ThuongHieu}
              </Text>
            </View>
          </View>
          <View style={StyleSheet.create({marginTop: 8})}>
            <View
              style={StyleSheet.create({
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}>
              <View
                style={StyleSheet.create({
                  flexDirection: 'row',
                  alignItems: 'center',
                })}>
                <Image source={require('../../../assets/images/status.png')} />
                <Text
                  style={StyleSheet.create({
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                    marginLeft: 8,
                  })}>
                  Tình trạng
                </Text>
              </View>
              <Text
                style={StyleSheet.create({
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#000000',
                })}>
                {item.TinhTrang}%
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 2,
            marginTop: 10,
            width: '100%',
            padding: 10
          }}>
           
            <Text style={{fontSize: 14, fontWeight: '400'}}>{item.MoTa}</Text>
          </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text
            style={StyleSheet.create({
              fontWeight: '600',
              size: 14,
              color: '#00081D',
            })}>
            Thanh toán
          </Text>
          <Text
            style={StyleSheet.create({
              fontWeight: '700',
              size: 18,
              color: color.MAIN,
            })}>
            {item.Gia}đ
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/chatButton.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={StyleSheet.create({
            paddingHorizontal: 34,
            paddingVertical: 11,
            backgroundColor: color.MAIN,
            borderRadius: 60,
          })}>
          <Text
            style={StyleSheet.create({
              fontWeight: '500',
              fontSize: 16,
              color: '#FFFFFF',
            })}>
            Mua ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 70,
    backgroundColor: '#FFFFFF',
    top: -9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  productContainer: {
    width: '100%',
    padding: 12,
    height: 104,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    flexDirection: 'row',
  },

  detailContainer: {
    width: '100%',
    padding: 12,
    height: 189,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },

  accountDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  accountBottomContainer: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 6,
    marginTop: 12,
    backgroundColor: '#F4EFFD',
    borderRadius: 4,
    justifyContent: 'space-evenly',
  },

  accountTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  accountContainer: {
    width: '100%',
    height: 107,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },

  voucherContainer: {
    marginTop: 8,
  },

  PriceContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Namecontainer: {
    width: '100%',
    height: 115,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },

  scrollView: {
    marginHorizontal: 16,
    backgroundColor: '#F0F2F5',
    top: -10,
  },

  topNav: {
    top: 40,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },

  imageContainer: {},

  header: {},

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F2F5',
    position: 'relative',
  },
});
