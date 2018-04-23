import React from 'react';
import { TouchableHighlight, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as d from '../../Constants';

const DrawerButton = ({ text, iconName, ...props }) => (
  <TouchableHighlight
    style={{ height: 50 * d.height, width: 280 * d.width, justifyContent: 'center' }}
    underlayColor="#00000010"
    {...props}
  >
    <View
      style={{
        // height: 40 * d.height,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20 * d.width
        // paddingBottom: 10 * d.height
      }}
    >
      {iconName !== null ? (
        <View style={{ width: 45 * d.width }}>
          <Icon
            name={iconName}
            style={{ paddingTop: 5 * d.height, paddingRight: 10 * d.width }}
            size={35}
            color="#00000080"
          />
        </View>
      ) : null}
      <Text style={{ fontSize: 18 }}>{text}</Text>
    </View>
  </TouchableHighlight>
);

export { DrawerButton };
