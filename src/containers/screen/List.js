import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {ScrollView} from 'react-native';
import color from '../../styles/color';
import {AppContext} from '../../MyConText';
import {baseURL, getData, postData} from '../../api/helper';
import {useEffect} from 'react';

const List = ({navigation}) => {
  const [information] = useContext(AppContext);
  const [list, setList] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [listLike, setListLike] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState('0');

  const renderList = ({item}) => {
    const checkFavorite = listLike.some(tmp => tmp.MaBaiDang == item.MaBaiDang)
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {...item, checkFavorite});
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
          <Image
            style={{
              tintColor: checkFavorite
                ? color.MAIN
                : color.TEXT_SECOND,
            }}
            source={require('../../../assets/images/Heart2.png')}
          />
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
  };

  const handleLClickCategories = MaLoaiSanPham => {
    setSelectedCategories(MaLoaiSanPham);
    if (MaLoaiSanPham == '0') handleLoadList();
    else callDataWithCategories(MaLoaiSanPham);
  };

  const callDataListLike = async MaLoaiSanPham => {
    const data = await postData(`${baseURL}SelectFavorite.php`, {
      MaTaiKhoan: information.MaTaiKhoan,
    });
    setListLike(data)
  };

  const callDataWithCategories = async MaLoaiSanPham => {
    const data = await postData(`${baseURL}SelectWithLoai.php`, {
      MaLoaiSanPham: MaLoaiSanPham,
    });
    setList(data);
  };

  const handleLoadList = async () => {
    callDataListLike();
    const data = await getData(`${baseURL}select.php`);
    const categoriesData = await getData(`${baseURL}getCategories.php`);
    setListCategories([
      {
        MaLoaiSanPham: '0',
        TenLoaiSanPham: 'Tất cả',
      },
      ...categoriesData,
    ]);
    setList(data);
    console.log('95 List.JS Call API');
  };

  useEffect(() => {

    handleLoadList();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F0F2F5'} />
      <View style={styles.header}>
        <View
          style={StyleSheet.create({
            flexDirection: 'row',
            alignItems: 'center',
          })}>
          <Image
            source={require('../../../assets/images/avatar2.png')}
            resizeMode="cover"
          />
          <View style={StyleSheet.create({marginLeft: 12})}>
            <Text
              style={StyleSheet.create({
                fontWeight: '300',
                fontSize: 12,
                color: '#000000',
              })}>
              Xin chào!
            </Text>
            <Text
              style={StyleSheet.create({
                fontWeight: '600',
                fontSize: 16,
                color: '#000000',
              })}>
              {information.HoTen}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={StyleSheet.create({})}
            source={require('../../../assets/images/searchIcon.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/images/banner.png')}
          height={192}
          width={352}
          style={{height: 202, width: 362}}
        />
      </TouchableOpacity>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {listCategories.map(item => {
          return (
            <TouchableOpacity
              onPress={() => handleLClickCategories(item.MaLoaiSanPham)}
              key={item.MaLoaiSanPham}
              keyExtractor={item.MaLoaiSanPham}
              style={StyleSheet.create({
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',

                marginRight: 6,
                paddingHorizontal: 15,
                backgroundColor:
                  selectedCategories == item.MaLoaiSanPham
                    ? color.MAIN
                    : color.WHITE,
                height: 32,
                borderRadius: 60,
              })}>
              <Text
                style={StyleSheet.create({
                  fontWeight: '500',
                  fontSize: 14,
                  color:
                    selectedCategories !== item.MaLoaiSanPham
                      ? color.TEXT_SECOND
                      : color.WHITE,
                })}>
                {item.TenLoaiSanPham}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <FlatList
        style={{height: '100%'}}
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
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginHorizontal: 10,
    padding: 12,
    marginBottom: 16,
  },

  scrollView: {
    height: 130,
    width: '97%',
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 16,
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F2F5',
    paddingBottom: 55,
  },
});
