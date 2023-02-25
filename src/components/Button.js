import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../styles/color';

const Button = ({on_press, btn_text, styleCustom}) => {
  return (
    <TouchableOpacity
      onPress={on_press}
      style={{
        justifyContent: 'center',
        width: '100%',
        height: 44,
        borderRadius: 60,
        backgroundColor: color.MAIN,
        ...styleCustom
      }}
    >
      <Text
        style={{
          color: color.WHITE,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '600',
        }}
      >
        {btn_text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
