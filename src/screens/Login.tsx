import React from 'react';
import {
  Text,
  Animated,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import apiActionCreator from '../store/apiActionCreator';
import {useAppDispatch, useAppSelector} from '../utils/constants';
import { API } from '../api/authApi';

export type loginProps = {
  topValue: Animated.Value;
  loginOpacity: Animated.Value;
  onLoginPress: any;
};

export default function Login(props: loginProps) {
  const isLoading = useAppSelector(state => state.authReducer.loading);
  const dispatch = useAppDispatch();

  const onLogin = () => {
    dispatch(apiActionCreator(API));
    onLoginPress()
  };

  const {topValue, loginOpacity, onLoginPress} = props;
  return (
    <Animated.View
      style={[
        {
          transform: [{translateY: topValue}],
          opacity: loginOpacity,
        },
      ]}>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <CustomTextInput title="User Id" autoFocus={true} />
        <CustomTextInput title="Password" containerStyle={{marginTop: 20}} />
        {isLoading ? (
          <ActivityIndicator style={styles.loadingStyle} size="large" />
        ) : (
          <CustomButton
            text="Submit"
            buttonStyle={styles.submitButtonStyle}
            onClick={onLogin}
          />
        )}
        <Text style={styles.quickBalancetextStyle}>Forgot userId</Text>
        <Text style={styles.quickBalancetextStyle}>Forgot Password</Text>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  submitButtonStyle: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 25,
    height: 50,
  },
  quickBalancetextStyle: {
    alignSelf: 'center',
    marginTop: 20,
  },
  loadingStyle: {
    paddingVertical: 20,
  },
});
