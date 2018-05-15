import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as d from '../../Constants';

const ButtonTextHeader = ({ text, color, ...props }) => (
  <View style={[styles.container, ...props]}>
    <TouchableOpacity {...props}>
      <Text style={[{ color }, styles.textStyle]}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginBottom: 10 * d.height,
    marginTop: 5 * d.height
  },
  textStyle: {
    fontSize: 17,
    fontWeight: '500'
  }
});

export { ButtonTextHeader };
