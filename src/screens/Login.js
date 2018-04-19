import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonText, InputText, SmallButton } from '../components';
import * as d from '../../Constants';
import { AboutTwitterScreen, ForgotPasswordScreen } from '../../Screens';

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View>
              <View style={styles.headerContainer}>
                <View style={styles.headerView}>
                  <View style={{ paddingLeft: 15 * d.width, paddingTop: 8 }}>
                    <ButtonText
                      text="Cancel"
                      color="#1CABE9"
                      onPress={() => this.props.navigation.goBack()}
                    />
                  </View>
                  <View style={styles.logoView}>
                    {/* eslint-disable */}
                    <Image
                      source={require('../assets/images/TwitterLogo.png')}
                      style={styles.logoStyle}
                    />
                    {/* eslint-enable */}
                  </View>
                  <TouchableOpacity
                    style={{ paddingRight: 15 }}
                    onPress={() => navigate(AboutTwitterScreen)}
                  >
                    <Icon name="ios-more-outline" color="#1CABE9" size={40} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputView}>
                <Text style={styles.textSignUpStyle}>{'Log in to Twitter'}</Text>
                <View style={styles.inputView}>
                  <InputText text="Phone, email or username" autoFocus />
                  <InputText text="Password" secureTextEntry />
                </View>
              </View>
            </View>
            <View style={styles.footerView}>
              <View
                style={{
                  paddingLeft: 10 * d.width,
                  alignSelf: 'center',
                  paddingTop: 4 * d.height
                }}
              >
                <ButtonText
                  text="Forgot password?"
                  color="#1CABE9"
                  onPress={() => navigate(ForgotPasswordScreen)}
                />
              </View>
              <View style={{ paddingTop: 5 * d.height, paddingRight: 10 * d.width }}>
                <SmallButton
                  text="Done"
                  buttonColor="#1CABE9"
                  textButtonColor="#FFFFFF"
                  fontWeight="700"
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerContainer: {
    width: d.fullWidth
  },
  logoStyle: {
    height: 30 * d.height,
    width: 30 * d.width
    // left: 105 * d.width
  },
  logoView: {
    alignSelf: 'center',
    paddingRight: 10 * d.width
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20 * d.height,
    paddingBottom: 20 * d.height
  },
  textSignUpStyle: {
    fontSize: 22,
    fontWeight: '800',
    paddingBottom: 70 * d.height,
    paddingLeft: 10 * d.width
  },
  inputView: {
    height: 60 * d.height,
    // alignSelf: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10 * d.width
  },
  footerView: {
    borderTopWidth: 0.5,
    borderTopColor: '#00000050',
    paddingBottom: 10 * d.height,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
