import React from 'react';
import {
    TextInput, View, StyleSheet
} from 'react-native';

const InputText = ({ text, ...props }) => (
    <View style={styles.container}>
        <TextInput
            placeholder={text}
            style={{ fontSize: 15, bottom: 10, color: '#1CABE9' }}
            {...props}
            autoCorrect={false}
            placeholderTextColor='#00000099'
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#00000090'
    }
});

export { InputText };
