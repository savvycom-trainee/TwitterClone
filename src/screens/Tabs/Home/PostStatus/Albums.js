import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Header, ButtonTextHeader } from '../../../../components';

export class Albums extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    this.onLoadAlbums();
  }

  onLoadAlbums = () => {
    this.setState({ albums: this.props.navigation.getParam('albums') });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header
          leftHeader={
            <ButtonTextHeader text="Cancel" color="#1CABE9" onPress={() => navigation.goBack()} />
          }
          centerHeader={
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700'
                // paddingBottom: 20
              }}
            >
              {'All photos'}
            </Text>
          }
          rightHeader={<ButtonTextHeader text="Add" color="#00000050" />}
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            {this.state.albums.map((p, i) => (
              <Image
                key={i}
                style={{ width: 125, height: 125 }}
                source={{ uri: p.node.image.uri }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
