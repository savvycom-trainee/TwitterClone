import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import * as d from '../../Constants';
import { ButtonText, InputText, SmallButton } from '../components';

export default class SignUp extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.headerView}>
              <ButtonText
                text="Cancel"
                color="#1CABE9"
                onPress={() => this.props.navigation.goBack()}
              />
              <View style={styles.logoView}>
                {/* eslint-disable */}
                <Image
                  source={require('../assets/images/TwitterLogo.png')}
                  style={styles.logoStyle}
                />
                {/* eslint-enable */}
              </View>
            </View>
            <View style={styles.inputView}>
              <InputText text="Name" autoFocus />
              <InputText text="Phone number or email address" />
            </View>
            <View style={styles.footerView}>
              <View style={{ top: 5 * d.height, right: 10 * d.width }}>
                <SmallButton 
                    text="Done"
                    buttonColor="#1CABE9"
                    textButtonColor="#FFFFFF"
                    fontWeight='700'
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
  logoStyle: {
    height: 30 * d.height,
    width: 30 * d.width,
    left: 105 * d.width
  },
  logoView: {
    alignSelf: 'center'
  },
  headerView: {
    flexDirection: 'row',
    top: 20 * d.height,
    left: 20 * d.width
  },
  inputView: {
    height: 70 * d.height,
    width: 300 * d.width,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  footerView: {
    borderTopWidth: 0.5,
    borderTopColor: '#00000050',
    bottom: 10 * d.height,
    alignItems: 'flex-end'
  }
});
