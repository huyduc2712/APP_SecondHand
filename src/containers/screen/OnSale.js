import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Back from '../../../assets/images/back.png';
import color from '../../styles/color';
import Product from '../../../assets/images/shoes3.png';
import Pen from '../../../assets/images/pen.png';
import Delete from '../../../assets/images/delete.png';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppContext} from '../../MyConText';
import {postData, baseURL} from '../../api/helper';
import {useEffect} from 'react';

const OnSale = ({navigation}) => {
  const [data, setData] = useState([]);
  const [information] = useContext(AppContext);

  const getDataFromAPI = async () => {
    const data = await postData(`${baseURL}SelectWithId.php`, {
      MaTaiKhoan: information.MaTaiKhoan,
    });
    setData(data);
  };

  const hidePost = async (MaBaiDang, TrangThai) => {
    const data = await postData(`${baseURL}Hide.php`, {MaBaiDang, TrangThai});
    if (data.code == '2'){
      alert(data.message);
      getDataFromAPI()
    } 
    else alert(data.message);
  };

  const Alertlog = (MaBaiDang, TrangThai = 2) => {
    Alert.alert(
      //Title
      'Xoá sản phẩm',
      //Body
      'Bạn có muốn xoá sản phẩm',
      [
        {
          text: 'Xác nhận',
          onPress: () => {
            hidePost(MaBaiDang, TrangThai)
          },
        },
        {
          text: 'Huỷ',
          onPress: () => {
            console.log('Xoá không thành công');
          },
        },
      ],
    );
  };
  useEffect(() => {
    navigation.setOptions({refresh: getDataFromAPI})
    getDataFromAPI();
  }, []);

  return (
    <SafeAreaView style={{width: '100%', backgroundColor: '#F0F2F5', flex: 1}}>
      <View
        style={{
          height: 44,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          paddingLeft: 16,
        }}>
       
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: '700',
          }}>
          {'Sản phẩm đang bán'}
        </Text>
      </View>

      <ScrollView
        style={{
          flexDirection: 'column',
          paddingHorizontal: 12,
          marginTop: 12,
          height: '100%',
        }}>
        {data.map(item => {
          return (
            <View
              key={item.MaBaiDang}
              style={{
                flexDirection: 'row',
                backgroundColor: color.WHITE,
                height: 104,
                width: '100%',
                padding: 12,
                borderRadius: 4,
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: color.BACKGROUDITEM,
                  borderRadius: 4,
                }}>
                <Image source={{uri: item.img}} style={{width: 80, height: 80}} />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: 200,
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 14, fontWeight: '600'}}>
                  {item.TieuDe}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: color.TEXT_SECOND,
                  }}>
                  {item.MoTa}
                </Text>
                <Text style={{fontSize: 14, fontWeight: '600'}}>
                  {item.Gia}d
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('Update', {...item})}>
                  <Image source={Pen} style={{width: 24, height: 24}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alertlog(item.MaBaiDang)}>
                  <Image source={Delete} style={{width: 24, height: 24}} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnSale;

const styles = StyleSheet.create({});
