import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonText = ({ text, color, ...props }) => (
            <View style={[styles.container, ...props]}>
        <TouchableOpacity {...props}>
                <Text style={[{ color }, styles.textStyle]}>{text}</Text>
        </TouchableOpacity>
            </View>
    );

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',

    },
    textStyle: {
        fontSize: 15,
        fontWeight: '500'
    }
});

export { ButtonText };
