import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as d from '../../Constants';

export class Header extends Component {
  render() {
    const { leftHeader, centerHeader, rightHeader, onPressLeftIcon, onPressRightIcon } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressLeftIcon} style={{ paddingLeft: 10 * d.width }}>
          {leftHeader}
        </TouchableOpacity>
        <View style={{ paddingTop: 3 * d.height }}>{centerHeader}</View>
        <TouchableOpacity onPress={onPressRightIcon} style={{ paddingRight: 10 * d.width }}>
          {rightHeader}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25 * d.height,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#00000050',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF'
  }
});
