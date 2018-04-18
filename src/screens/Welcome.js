import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';
import * as d from '../../Constants';
import {
    Button, ButtonText
} from '../components';

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
            {/* eslint-disable */}
                <Image
                    source={require('../assets/images/TwitterLogo.png')}
                    style={styles.logoStyle}
                />
                <View style={styles.signUpView}>
                    <Text style={styles.textSignUpStyle}>
                        {'See what\'s\nhappening in the\nworld right now.'}
                    </Text>
                    <Button
                        fontWeight='800'
                        fontSize={15}
                        text='Get started'
                        buttonColor='#1CABE9'
                        textButtonColor='#FFFFFF'
                    />
                </View>
                <View style={styles.loginView}>
                    <Text style={styles.textLoginStyle}>
                        {'Have an account already? '}
                    </Text>
                    <ButtonText 
                        text='Log in'
                        color='#1CABE9'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    signUpView: {
        alignSelf: 'center',
    },
    textSignUpStyle: {
        fontSize: 30,
        fontWeight: '800',
        bottom: 20
    },
    logoStyle: {
        height: 30 * d.height,
        width: 30 * d.width,
        top: 50 * d.height,
        left: 35 * d.width,
        // bottom: 300
    },
    loginView: {
        flexDirection: 'row',
        left: 35 * d.width,
        bottom: 40        
    },
    textLoginStyle: {

    }
});
