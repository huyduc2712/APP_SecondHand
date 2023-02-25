import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const DATA = [
  {
    id: 1,
    name: 'sadads',
    price: '12313',
  },
  {
    id: 2,
    name: 'sadads',
    price: '12313',
  },
];

const Hello = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Hello</Text>
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>asdasddadasa</Text>
          </View>
        )}
      />
    </View>
  );
};

const Card = () => {
  <View></View>;
};

export default Hello;

const styles = StyleSheet.create({});
