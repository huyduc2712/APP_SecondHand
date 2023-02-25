import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import User from '../../../assets/images/user.png';
import Search from '../../../assets/images/search.png';
// import Heart from '../../../assets/images/heart.png';
import Shoes from '../../../assets/images/shoes.png';
import color from '../../styles/color';
import {AppContext} from '../../MyConText';
import {baseURL, postData} from '../../api/helper';
const width = Dimensions.get('screen').width / 2 - 30;

const Favorite = ({navigation}) => {
  const [information] = useContext(AppContext);
  const [list, setList] = useState([]);

  const renderList = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', item);
      }}
      style={{
        width: '48%',
        height: 292,
        marginBottom: 16,
        borderRadius: 5,
        padding: 12,
        backgroundColor: 'white',
      }}>
      <View
        style={StyleSheet.create({
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}>
        <Image source={require('../../../assets/images/avatar2.png')} />
        <Image style={{tintColor: color.MAIN}} source={require('../../../assets/images/Heart2.png')} />
      </View>
      <View
        style={StyleSheet.create({
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        })}>
        <Image
          source={{uri: item.img}}
          style={StyleSheet.create({width: 110, height: 110})}
          resizeMode="contain"
        />
      </View>
      <View style={StyleSheet.create({marginTop: 12, height: 100})}>
        <Text
          numberOfLines={1}
          style={{
            fontWeight: '600',
            fontSize: 15,
            color: '#000000',
          }}>
          {item.TieuDe}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: '#8592A6',
            height: 40,
          }}>
          {item.MoTa}
        </Text>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 15,
            color: '#000000',
            marginTop: 10,
          }}>
          {item.Gia}đ
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleLoadList = async () => {
    const data = await postData(`${baseURL}SelectFavorite.php`, {MaTaiKhoan: information.MaTaiKhoan});
    setList(data);
    console.log('9 Favorite.JS Call API');
  };

  useEffect(() => {
    handleLoadList();
  }, []);
  return (
    <SafeAreaView style={{width: '100%', backgroundColor: '#F0F2F5', paddingBottom: 170}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={User} style={{width: 32, height: 32}} />
            <View style={{flexDirection: 'column', marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '300',
                  color: color.BLACK,
                }}>
                Xin chào!
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: color.TEXT_PRIMARY,
                }}>
                {information.HoTen}
              </Text>
            </View>
          </View>
          <Image
            source={Search}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </View>
        <View style={{marginTop: 12, paddingLeft: 16}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: color.TEXT_PRIMARY,
            }}>
            Sản phẩm đã được bạn yêu thích!
          </Text>
        </View>
      </View>
      <FlatList
            style={{marginTop: 10}}
            data={list}
            onRefresh={handleLoadList}
            refreshing={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.MaBaiDang}
            columnWrapperStyle={{
              flex: 0.5,
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}
            renderItem={renderList}
          />
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
