import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as d from '../../Constants';

const Button = ({ text, buttonColor, textButtonColor, ...props }) => (
  <TouchableOpacity {...props}>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: buttonColor,
        height: 40 * d.height,
        width: 310 * d.width,
        alignSelf: 'center',
        borderRadius: 30,
        flexDirection: 'row'
      }}
    >
      <Text
        style={{
          ...props,
          color: textButtonColor,
        }}
      >
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export { Button };
