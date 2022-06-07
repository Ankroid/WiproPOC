import React from 'react';
import { StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type ButtonProps = {
  text: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onClick: any;
};

const CustomButton = (props: ButtonProps) => {
  const {text, textStyle, buttonStyle, onClick, ...rest} = props;

  return (
    <TouchableOpacity
      style={[styles.buttonStyleDefault, buttonStyle]}
      onPress={onClick}
      {...rest}>
      <Text style={[styles.textStyleDefault, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyleDefault: {
    height: 38,
    width: 100,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  textStyleDefault: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
  },
});

export default CustomButton;
