import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../styles/color';

const ButtonOutline = ({on_press, btn_text}) => {
  return (
    <TouchableOpacity
      onPress={on_press}
      style={{
        marginTop: 16,
        justifyContent: 'center',
        width: '100%',
        height: 44,
        borderRadius: 60,
        borderWidth: 0.5,
        borderColor: color.MAIN,
      }}
    >
      <Text
        style={{
          color: color.MAIN,
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

export default ButtonOutline;

const styles = StyleSheet.create({});
