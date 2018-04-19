import React from 'react';
import {
    TouchableHighlight,
    View,
    Text, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as d from '../../Constants';

const LinkCard = ({ text, borderTopWidth, borderColor, ...props }) => (
    <TouchableHighlight style={styles.container} underlayColor='#00000020' {...props}>
    <View 
        style={{
            height: 45 * d.height,
            width: 365,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth,
            borderColor,
            alignItems: 'center',
            alignSelf: 'flex-end'
        }}
    >
        <Text style={{ fontSize: 17, fontWeight: '700' }}>{text}</Text>
        <Icon 
            name='ios-arrow-forward-outline'
            style={{ paddingTop: 5 * d.height, paddingRight: 10 * d.width }}
            size={20} 
            color='#00000050' 
        />
    </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        width: d.fullWidth,
        
    },
});

export { LinkCard };
