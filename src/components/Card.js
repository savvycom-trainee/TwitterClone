import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as d from '../../Constants';

const Card = props => <View style={styles.containerStyle}>{props.children}</View>;

const styles = StyleSheet.create({
  containerStyle: {
    borderTopWidth: 0.5,
    borderColor: '#00000050',
    borderBottomWidth: 0.5,
    elevation: 1,
    flexDirection: 'row',
    width: d.fullWidth,
    paddingLeft: 10,
    // paddingRight: 5,
    paddingTop: 10
    // marginTop: 10
  }
});

export { Card };
