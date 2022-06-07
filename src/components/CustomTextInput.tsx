import React from 'react';
import {Platform, StyleSheet, TextInput, Text, ViewStyle, View} from 'react-native';

const IS_ANDROID = Platform.OS === 'android';

export type TextInputProps = {
  title: string
  style?: ViewStyle;
  value?: string;
  placeholder?: string;
  containerStyle?: ViewStyle;
  autoFocus?: boolean
};

const CustomTextInput = (props: TextInputProps) => {
  const {value, placeholder, containerStyle, style,title,autoFocus, ...rest} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={[styles.textInput, style]}
        maxLength={32}
        autoFocus={autoFocus}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
    
  },
  textInput: {
    height: 32,
    borderBottomColor:'yellow',
    borderBottomWidth: 1
  },
});

export default CustomTextInput;
