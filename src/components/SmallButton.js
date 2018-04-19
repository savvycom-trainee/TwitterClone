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
        alignSelf: 'center',
        borderRadius: 30,
        flexDirection: 'row'
      }}
    >
      <Text
        style={{
          fontWeight: '700',
          paddingLeft: 15 * d.width,
          paddingRight: 15 * d.width,
          paddingTop: 10 * d.height,
          paddingBottom: 10 * d.height,
          color: textButtonColor
        }}
      >
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export { SmallButton };
