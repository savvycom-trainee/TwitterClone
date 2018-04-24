import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../../components';
import posts from '../../../../data/posts';
import styles from './styles';
import AllTab from './AllTab';
import MentionTab from './MentionTab';

export class Notifications extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        leftHeader={<Icon name="ios-contact-outline" size={35} />}
        centerHeader={<Text style={{ fontSize: 20, fontWeight: '700' }}>{'Notifications'}</Text>}
        rightHeader={<Icon name="ios-settings-outline" size={35} style={{ color: '#1CABE9' }} />}
        onPressLeftIcon={() => navigation.navigate('DrawerOpen')}
      />
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-notifications-outline" size={35} style={{ color: tintColor }} />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      allTabChosen: true
    };
  }

  render() {
    console.log(this.state.allTabChosen);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.headerView}>
            <View style={styles.centerHeaderChild}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.setState({
                    allTabChosen: true
                  });
                }}
              >
                <View
                  style={[
                    styles.tabView,
                    {
                      backgroundColor: this.state.allTabChosen ? '#1CABE9' : null,
                      borderTopLeftRadius: this.state.allTabChosen ? 20 : null,
                      borderBottomLeftRadius: this.state.allTabChosen ? 20 : null
                    }
                  ]}
                >
                  <Text
                    style={{
                      color: this.state.allTabChosen ? '#FFFFFF' : '#1CABE9'
                    }}
                  >
                    {'All'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.setState({
                    allTabChosen: false
                  });
                }}
              >
                <View
                  style={[
                    styles.tabView,
                    {
                      backgroundColor: this.state.allTabChosen !== true ? '#1CABE9' : null,
                      borderTopRightRadius: this.state.allTabChosen !== true ? 20 : null,
                      borderBottomRightRadius: this.state.allTabChosen !== true ? 20 : null
                    }
                  ]}
                >
                  <Text
                    style={{
                      color: this.state.allTabChosen !== true ? '#FFFFFF' : '#1CABE9'
                    }}
                  >
                    {'Mentions'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View>
            {/* eslint-disable */}
            <FlatList
              data={this.state.allTabChosen ? posts : [{ status: 'abc' }]}
              extraData={this.state}
              renderItem={({ item, index }) =>
                this.state.allTabChosen ? (
                  <AllTab navigation={this.props.navigation} item={item} activeIndex={index} />
                ) : (
                  <MentionTab />
                )
              }
              keyExtractor={item => item.status}
            />
            {/* eslint-enable */}
          </View>
        </ScrollView>
      </View>
    );
  }
}
