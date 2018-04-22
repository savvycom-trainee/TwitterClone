import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';
import * as d from '../../../Constants';

export class Notifications extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-notifications-outline" size={35} style={{ color: tintColor }} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      allTabChosen: true,
      mentionTabChosen: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerHeader={
            <View style={styles.centerHeaderView}>
              <Text style={styles.centerHeaderStyle}>{'Notifications'}</Text>
              <View style={styles.centerHeaderChild}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({
                      allTabChosen: !this.state.allTabChosen,
                      mentionTabChosen: !this.state.mentionTabChosen
                    })
                  }
                >
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: this.state.allTabChosen === true ? '#1CABE9' : null,
                      width: 177.5,
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                      flex: 0.5,
                      alignContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        color: this.state.allTabChosen === true ? '#FFFFFF' : '#1CABE9'
                      }}
                    >
                      All
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({
                      allTabChosen: !this.state.allTabChosen,
                      mentionTabChosen: !this.state.mentionTabChosen
                    })
                  }
                >
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: this.state.mentionTabChosen === true ? '#1CABE9' : null,
                      width: 177.5,
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      flex: 0.5,
                      alignContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        color: this.state.mentionTabChosen === true ? '#FFFFFF' : '#1CABE9'
                      }}
                    >
                      Mentions
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          }
          rightHeader={<Icon name="ios-settings-outline" size={35} style={{ color: '#1CABE9' }} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerHeaderStyle: {
    fontSize: 20,
    fontWeight: '700'
  },
  centerHeaderView: {
    height: 78 * d.height,
    justifyContent: 'space-between'
  },
  centerHeaderChild: {
    height: 30 * d.height,
    width: 355 * d.height,
    borderWidth: 1,
    borderColor: '#1CABE9',
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 43 * d.height,
    borderRadius: 20
  }
});
