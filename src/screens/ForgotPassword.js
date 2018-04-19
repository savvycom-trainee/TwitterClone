import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { ButtonText, SmallButton } from '../components';
import * as d from '../../Constants';

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View
            style={{
              alignSelf: 'flex-start',
              paddingLeft: 15 * d.width,
              paddingTop: 13 * d.height,
              paddingBottom: 10 * d.height
            }}
          >
            <ButtonText
              text="Cancel"
              color="#1CABE9"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerTextStyle}>{'Reset password'}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.bodyView}>
            <Text style={styles.titleStyle}>{'Find your Twitter account'}</Text>
            <Text style={styles.detailStyle}>{'Enter your email, phone number, or username.'}</Text>
            <TextInput style={styles.inputStyle} />
            <View style={{ alignSelf: 'flex-start' }}>
              <SmallButton text="Search" buttonColor="#1CABE9" textButtonColor="#FFFFFF" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    borderBottomWidth: 1,
    borderBottomColor: '#00000010',
    paddingTop: 20 * d.height
  },
  headerTextView: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
    paddingTop: 28 * d.height
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: '800'
  },
  bodyView: {
    height: 200 * d.height,
    justifyContent: 'space-around',
    paddingLeft: 15 * d.width
  },
  titleStyle: {
    fontSize: 21,
    fontWeight: '800'
  },
  detailStyle: {
    fontSize: 14,
    fontWeight: '400'
  },
  inputStyle: {
    borderRadius: 40,
    width: 280 * d.width,
    height: 30 * d.height,
    borderWidth: 1,
    borderColor: '#1CABE9',
    paddingLeft: 10
  }
});
