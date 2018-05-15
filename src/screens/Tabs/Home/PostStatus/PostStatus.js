import React, { Component } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  CameraRoll
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { Header, SmallButton } from '../../../../components';
import postStatusAction from '../../../../actions/index';
import { AlbumsScreen } from '../../../../../Screens';

class PostStatusTab extends Component {
  state = {
    status: '',
    photos: []
  };

  componentDidMount() {
    this.handleOnPress();
  }

  handleOnPress = () => {
    CameraRoll.getPhotos({
      first: 30,
      assetType: 'Photos'
    })
      .then(result => {
        this.setState({ photos: result.edges });
      })
      .catch(err => {
        console.log(`Access Camera Roll got error: ${err}`);
      });
  };

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Header
          leftHeader={<Icon name="ios-close-outline" size={40} color="#1CABE9" />}
          rightHeader={
            <SmallButton
              text="Tweet"
              buttonColor="#1CABE9"
              textButtonColor="#FFFFFF"
              onPress={() => {
                navigation.goBack();
                this.props.onPostStatus('', this.state.status, '');
              }}
            />
          }
          onPressLeftIcon={() => navigation.goBack()}
        />
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Icon name="ios-contact-outline" size={40} />
            </View>
            <View style={{ flex: 6, paddingLeft: 10, paddingRight: 10 }}>
              <TextInput
                multiline
                autoFocus
                placeholder="What's happening?"
                placeholderTextColor="#00000070"
                style={{ fontSize: 16 }}
                autoCorrect={false}
                numberOfLines={10}
                value={this.state.status}
                onChangeText={status => this.setState({ status })}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0.5,
            borderTopColor: '#00000050',
            flexDirection: 'row',
            height: 40,
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(AlbumsScreen, { albums: this.state.photos });
            }}
          >
            <Icon
              name="ios-image"
              size={25}
              color="#1CABE9"
              style={{ paddingLeft: 15, paddingRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              name="ios-videocam"
              size={25}
              color="#1CABE9"
              style={{ paddingLeft: 15, paddingRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              name="ios-clipboard"
              size={25}
              color="#1CABE9"
              style={{ paddingLeft: 15, paddingRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              name="ios-compass"
              size={25}
              color="#1CABE9"
              style={{ paddingLeft: 15, paddingRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  post: state.postStatusReducer,
  time: state.postStatusReducer.time ? state.postStatusReducer.time : '10h',
  status: state.postStatusReducer.status,
  attachment: state.postStatusReducer.attachment ? state.postStatusReducer.attachment : ''
});

const mapDispatchToProps = dispatch => ({
  onPostStatus: (time, status, attachment) => dispatch(postStatusAction(time, status, attachment))
});

export const PostStatus = connect(mapStateToProps, mapDispatchToProps)(PostStatusTab);
