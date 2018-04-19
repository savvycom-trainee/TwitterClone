import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as d from '../../Constants';

const Header = ({ centerHeader, rightHeader, onPressLeftIcon, onPressRightIcon }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPressLeftIcon} style={{ paddingLeft: 10 * d.width }}>
      <Icon name="ios-contact-outline" size={35} />
    </TouchableOpacity>
    <View style={{ paddingTop: 5 * d.height }}>{centerHeader}</View>
    <TouchableOpacity onPress={onPressRightIcon} style={{ paddingRight: 10 * d.width }}>
      {rightHeader}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 25 * d.height,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#00000050',
    justifyContent: 'space-between'
  }
});

export { Header };
