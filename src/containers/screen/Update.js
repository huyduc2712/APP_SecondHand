import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Back from '../../../assets/images/back.png';
import color from '../../styles/color';
import AddImage from '../../../assets/images/addImage.png';
import Button from '../../components/Button';
import {AppContext} from '../../MyConText';
import ImagePicker from 'react-native-image-crop-picker';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {postData, baseURL} from '../../api/helper';
import {checkEmptyForm} from '../../validate';

const Post = ({route, navigation}) => {

  console.log(route)


  const [img, setImg] = useState(route.params.img);
  const [Type, setType] = useState({id: route.params.MaLoaiSanPham, title: 'Chọn loại'});
  const [Brand, setBrand] = useState(route.params.ThuongHieu);

  const [nameProduct, setNameProduct] = useState(route.params.TieuDe);
  const [size, setSize] = useState(route.params.Size);
  const [Description, setDescription] = useState(route.params.MoTa);
  const [price, setPrice] = useState(route.params.Gia);
  const [information] = useContext(AppContext);

  const handlePost = () => {
    if (
      checkEmptyForm(
        [img, nameProduct, size, Type.id, Description, price],
        [
          'Bạn chưa chọn hình',
          'Bạn chưa nhập tên sản phẩm',
          'Bạn chưa nhập size sản phẩm',
          'Bạn chưa chọn loại sản phẩm',
          'Bạn chưa nhập mô tả',
          'Bạn chưa nhập giá sản phẩm'
        ],
      )
    ) {
      logicPost()
    }
  };

  const logicPost = () => {
    let formData = new FormData();
    const item = {
      uri: img,
      name: 'image.jpg',
      type: 'image/jpg',
    };
    formData.append('image', item);

    fetch('http://192.168.1.5:1805/upload', {
      body: formData,
      method: 'post',
    })
      .then(data => data.json())
      .then(data => {
        postData(`${baseURL}Update.php`, {
          MaBaiDang: route.params.MaBaiDang,
          TieuDe: nameProduct,
          Gia: price,
          MoTa: Description,
          TinhTrang: 90,
          Mau: 'Trắng',
          Size: size,
          KhuVuc: 'TP.HCM',
          ThuongHieu: Brand,
          TrangThai: 1,
          MaLoaiSanPham: Type.id,
          MaTaiKhoan: information.MaTaiKhoan,
          img: data.img,
        }).then(data => {
          if (data.code == '2') {
            alert(data.message);
            setImg('');
            setBrand('Chọn thương hiệu');
            setDescription('');
            setSize('');
            setNameProduct('');
            setPrice('');
            setType({id: 2, title: 'Chọn loại'});

            navigation.replace('OnSale')
          } else {
            alert(data.message);
          }
        });
      });
  };

  const onChangeStateType = type => {
    setType(type);
  };

  const onChangeStateBrand = brand => {
    setBrand(brand);
  };

  const handleImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImg(image.path);
        console.log(image);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: '#F0F2F5',
        flex: 1,
      }}>
      <ScrollView
        style={{
          flexDirection: 'column',
          paddingHorizontal: 12,
          height: '100%',
        }}>
        <View
          style={{
            backgroundColor: color.WHITE,
            marginTop: 12,
            flexDirection: 'column',
            paddingLeft: 12,
            borderRadius: 4,
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                paddingTop: 16,
              }}>
              Hình Ảnh
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleImage}
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderStyle: 'dashed',
              borderColor: color.MAIN,
              borderRadius: 4,
              marginTop: 12,
            }}>
            <View
              style={{
                flexDirection: 'column',
                width: '100%',
                height: '100%',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {img ? (
                <Image source={{uri: img}} style={{width: 100, height: 100}} />
              ) : (
                <Image source={AddImage} style={{width: 50, height: 50}} />
              )}
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
              }}>
              Tên sản phẩm
            </Text>
            <TextInput
              style={{width: '70%'}}
              value={nameProduct}
              onChangeText={setNameProduct}
              placeholder="VD: Giày Nike, Giày Adidas,..."
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
              }}>
              Size
            </Text>
            <TextInput
              style={{width: '70%'}}
              value={size}
              onChangeText={setSize}
              placeholder="VD: 39, 40, 41,..."
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: color.WHITE,
            height: 241,
            marginTop: 8,
            paddingLeft: 12,
            paddingTop: 16,
            paddingRight: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 35,
              borderBottomWidth: 0.5,
              borderColor: color.BORDER_BOTTOM,
            }}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>Hạng mục</Text>
            {/* /////////////////////////// */}
            <TouchableOpacity>
              <Menu>
                <MenuTrigger text={Type.title} />
                <MenuOptions customStyles={optionsStyles}>
                  <MenuOption
                    onSelect={() => onChangeStateType({id: 1, title: 'Giày'})}
                    text="Giày"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateType({id: 2, title: 'Áo'})}
                    text="Áo"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateType({id: 3, title: 'Quần'})}
                    text="Quần"
                  />
                </MenuOptions>
              </Menu>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 35,
              borderBottomWidth: 0.5,
              marginTop: 15,
              borderColor: color.BORDER_BOTTOM,
            }}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>
              Chọn thương hiệu
            </Text>
            {/* Nike / Adidas/ MLB / Converse/ Vans/ Valentino/ Puma/ Reebok// FILA// Supreme// Asics///// Gucci///////// */}
            <TouchableOpacity>
              <Menu>
                <MenuTrigger text={Brand} />
                <MenuOptions customStyles={optionsStyles}>
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Gucci`)}
                    text="Gucci"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Asics`)}
                    text="Asics"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Supreme`)}
                    text="Supreme"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`FILA`)}
                    text="FILA"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Reebok`)}
                    text="Reebok"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Puma`)}
                    text="Puma"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Valentino`)}
                    text="Valentino"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Vans`)}
                    text="Vans"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Nike`)}
                    text="Nike"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Adidas`)}
                    text="Adidas"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`MLB`)}
                    text="MLB"
                  />
                  <MenuOption
                    onSelect={() => onChangeStateBrand(`Converse`)}
                    text="Converse"
                  />
                </MenuOptions>
              </Menu>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'column', marginTop: 16}}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>{'Mổ tả'}</Text>
            <TextInput
              style={{height: 80, marginTop: 8, width: '100%'}}
              placeholder="Mô tả chi tiết sản phẩm của bạn"
              value={Description}
              onChangeText={setDescription}
              placeholderTextColor={color.TEXT_SECOND}
              numberOfLines={4}
              multiline
              maxLength={150}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 8,
            paddingHorizontal: 12,
            paddingVertical: 16,
            backgroundColor: color.WHITE,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: 35,
            }}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>
              {'Giá bán(đ)'}
            </Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Nhập giá"
              value={price}
              onChangeText={setPrice}
              style={{
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
                alignContent: 'center',
              }}
            />
          </View>

          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              height: 35,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                {'Giảm giá'}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: color.TEXT_SECOND,
                }}>
                ({'Không bắt buộc'})
              </Text>
            </View>

            <TextInput
              keyboardType="numeric"
              placeholder="Nhập giá"
              style={{
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
                alignContent: 'center',
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 60,
            marginTop: 50,
            justifyContent: 'center',
          }}>
          <Button on_press={handlePost} btn_text={'Sữa bài'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;

const optionsStyles = {
  optionsContainer: {
    padding: 5,
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: 5,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {
    color: color.TEXT_SECOND,
  },
};
