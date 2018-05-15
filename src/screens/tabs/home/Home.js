import React, { Component } from 'react';
import { View, Text, FlatList, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { Header } from '../../../components';
import HomeView from './HomeView';
import { PostStatusScreen } from '../../../../Screens';
// import postStatusAction from '../../../actions/index';

class HomeTab extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        leftHeader={<Icon name="ios-contact-outline" size={35} />}
        centerHeader={
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700'
            }}
          >
            {'Home'}
          </Text>
        }
        rightHeader={<Icon name="ios-add-outline" size={35} style={{ color: '#1CABE9' }} />}
        onPressLeftIcon={() => navigation.navigate('DrawerOpen')}
        onPressRightIcon={() => navigation.navigate(PostStatusScreen)}
      />
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" size={35} style={{ color: tintColor }} />
    )
  });

  state = {
    status: '',
    posts: []
  };

  componentDidMount() {
    this.getPost();
  }

  componentDidUpdate() {
    this.getPost();
  }

  async getPost() {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('value'));
      this.setState({ posts: value });
    } catch (err) {
      console.log(`Get post got error ${err}`);
    }
  }

  async savePost(key, value) {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(`Save post got error ${err}`);
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.posts}
          renderItem={({ item, index }) => (
            <HomeView navigation={this.props.navigation} item={item} activeIndex={index} />
          )}
          keyExtractor={item => item.status}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  post: state.postStatusReducer
});

export const Home = connect(mapStateToProps)(HomeTab);
