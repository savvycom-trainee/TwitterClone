import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as d from '../../Constants';

const SmallButton = ({ text, buttonColor, textButtonColor, ...props }) => (
  <TouchableOpacity {...props}>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: buttonColor,
        height: 35 * d.height,
        width: 60 * d.width,
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

export { SmallButton };
