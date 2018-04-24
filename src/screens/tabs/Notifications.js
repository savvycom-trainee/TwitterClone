import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Card } from '../../components';
import * as d from '../../../Constants';
import posts from '../../../data/posts';
import { AbsolutePostScreen } from '../../../Screens';

class AllTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          underlayColor="#00000010"
          onPress={() => {
            console.log('card pressed');
            this.setState({ activeIndex: this.props.index });
            navigation.navigate(AbsolutePostScreen, { activeIndex: this.props.activeIndex });
          }}
        >
          <Card>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 2 }}>
                {/* eslint-disable */}
                <Image
                  source={require('../../assets/images/TwitterLogo.png')}
                  style={{
                    width: 30 * d.width,
                    height: 30 * d.height,
                    alignSelf: 'flex-end',
                    marginRight: 15 * d.width
                  }}
                />
                {/* eslint-enable */}
              </View>
              <View style={{ flex: 7, marginRight: 15 * d.width }}>
                <View style={styles.headerNotiView}>
                  <Image source={this.props.item.ava} style={styles.imageStyle} />
                  <Icon name="ios-arrow-down-outline" size={18} style={{ color: '#00000060' }} />
                </View>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 14 }}>{this.props.item.notiStatus}</Text>
                </View>
                <View>
                  <Text style={{ color: '#00000060', fontSize: 14 }}>{this.props.item.status}</Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

class MentionTab extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Nothing to see hear -- yet'}</Text>
          <Text
            style={{
              fontSize: 16,
              color: '#00000060',
              width: 320,
              marginTop: 10,
              textAlign: 'center'
            }}
          >
            {"When someone mentions you, you'll find it here."}
          </Text>
        </View>
      </View>
    );
  }
}

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
      allTabChosen: true,
      mentionTabChosen: false
    };
  }

  render() {
    console.log(this.state.allTabChosen);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              paddingTop: 5 * d.height,
              paddingBottom: 5 * d.height
            }}
          >
            <View style={styles.centerHeaderChild}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.setState({
                    allTabChosen: true,
                    mentionTabChosen: false
                  });
                }}
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
                    {'All'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.setState({
                    allTabChosen: false,
                    mentionTabChosen: true
                  });
                }}
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
                    {'Mentions'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
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
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF'
  },
  headerNotiView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10 * d.height
  },
  imageStyle: {
    width: 40 * d.width,
    height: 40 * d.height,
    borderRadius: 20
  }
});
