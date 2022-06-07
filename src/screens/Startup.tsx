import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Login from './Login';

export default function Startup({navigation}: any) {
  const opacity = useState(new Animated.Value(1))[0];
  const loginOpacity = useState(new Animated.Value(0))[0];
  const topValue = useState(new Animated.Value(800))[0];
  const backgroundHeight = useState(new Animated.Value(0))[0];
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [incrementAmount, setIncrementAmount] = useState('2');

  function animateLogin(
    toValueOpacity: number,
    toValueHeight: number,
    toValueTop: number,
    toValueLoginOpacity: number,
    splashVisible: boolean,
  ) {
    Animated.timing(opacity, {
      toValue: toValueOpacity,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(backgroundHeight, {
      toValue: toValueHeight,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(topValue, {
      toValue: toValueTop,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(loginOpacity, {
      toValue: toValueLoginOpacity,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setIsSplashVisible(splashVisible);
    });
  }

  return (
    <View style={styles.containerStyle}>
      <Animated.View
        style={[
          styles.animatedContainerStyle,
          {
            transform: [{translateY: backgroundHeight}],
          },
        ]}>
        <View style={styles.redBackgroundStyle} />
      </Animated.View>
      <SafeAreaView>
        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity onPress={() => animateLogin(1, 0, 800, 0, true)}>
          <Animated.View
          style={[
            {
              opacity: loginOpacity,
            },
          ]}> 
            <Image
              source={require('../../assets/left-arrow.png')}
              style={styles.backButtonStyle}
            />
            </Animated.View>
          </TouchableOpacity>
          <CustomButton
            text="Register"
            buttonStyle={styles.buttonStyle}
            onClick={() => animateLogin(1, 0, 800, 0, true)}
          />
        </View>
      </SafeAreaView>

      <Login
        loginOpacity={loginOpacity}
        topValue={topValue}
        onLoginPress={() => navigation.navigate('home')}
      />

      {isSplashVisible && (
        <Animated.View
          style={[
            styles.animatedViewStyle,
            {
              opacity,
            },
          ]}>
          <View style={styles.safeAreaViewStyle}>
            <Text style={styles.logoTextStyle}>RBKBANK </Text>
            <Text style={styles.textStyle}>
              Everything you love about Digital banking in a smarter, simpler
              design
            </Text>
          </View>
          <SafeAreaView style={styles.bottomButtonContainerStyle}>
            <CustomButton
              text="Login with user ID"
              buttonStyle={styles.loginButtonStyle}
              onClick={() => animateLogin(0, -150, 60, 1, false)}
            />
            <Text style={styles.quickBalancetextStyle}>Quick Balance </Text>
          </SafeAreaView>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  animatedContainerStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  backButtonStyle: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  buttonContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
    flexDirection: 'row',
  },
  safeAreaViewStyle: {
    marginHorizontal: 20,
    marginTop: 100,
  },
  buttonStyle: {
    borderColor: 'white',
    borderRadius: 15,
  },
  imageStyle: {
    width: 180,
    height: 70,
    marginTop: '20%',
  },
  logoTextStyle: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    width: '70%',
  },
  redBackgroundStyle: {
    height: '50%',
    width: '100%',
    backgroundColor: 'red',
    transform: [{scaleX: 1.6}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  loginButtonStyle: {
    marginTop: '30%',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 25,
    height: 50,
  },
  bottomButtonContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '40%',
  },
  quickBalancetextStyle: {
    alignSelf: 'center',
    marginTop: 20,
  },
  animatedViewStyle: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});
