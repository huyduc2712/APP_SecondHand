import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import color from '../styles/color';
const deviceHeight = Dimensions.get('window').height;
export class BottomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({show: true});
  };

  close = () => {
    this.setState({show: false});
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) return view;
    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }

  renderTitle = () => {
    const {title} = this.props;
    return (
      <View>
        <Text
          style={{
            color: color.BLACK,
            fontSize: 16,
            fontWeight: '600',
            alignSelf: 'center',
            margin: 12,
          }}
        >
          {title}
        </Text>
      </View>
    );
  };

  renderContent = () => {
    const {data} = this.props;
    return (
      <View>
        <FlatList
          style={{marginBottom: 20}}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSaparator}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        />
      </View>
    );
  };
  renderItem = ({item}) => {
    return (
      <View style={{padding: 16, height: 54}}>
        <Text style={{fontWeight: '400', fontSize: 14}}>{item.name}</Text>
      </View>
    );
  };

  renderSaparator = () => {
    <View
      style={{
        opacity: 0.1,
        backgroundColor: '#182F44',
        height: 1,
      }}
    ></View>;
  };

  render() {
    let {show} = this.state;
    const {onTouchOutside} = this.props;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'flex-end',
          }}
        >
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
            style={{
              backgroundColor: '#ffff',
              width: '100%',
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              paddingHorizontal: 10,
              maxHeight: deviceHeight * 0.4,
            }}
          >
            {this.renderTitle()}
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}
