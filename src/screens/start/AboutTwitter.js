import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as d from '../../../Constants';
import { LinkCard } from '../../components';

export class AboutTwitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.headerTextView}>
            <Text style={styles.headerTextStyle}>{'About Twitter'}</Text>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              paddingRight: 20 * d.width,
              paddingTop: 3 * d.height
            }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon
              name="ios-close-outline"
              color="#1CABE9"
              iconStyle={{ fontWeight: 'bold' }}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.bodyView}>
          <View style={styles.cardView}>
            <Text style={styles.titleStyle}>{'Version'}</Text>
            <Text style={styles.detailStyle}>{'7.21.2'}</Text>
          </View>
          <View style={styles.bigTitleView}>
            <Text style={styles.bigTitleStyle}>{'Get help'}</Text>
          </View>
          <View style={styles.ruleView}>
            <View style={{ paddingRight: 10 * d.width, paddingLeft: 10 * d.width }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginTop: 15, fontSize: 17, fontWeight: '700' }}>
                  {'Send crash reports'}
                </Text>
                <Switch
                  onTintColor="#46BF76"
                  value={this.state.toggled}
                  onValueChange={value => this.setState({ toggled: value })}
                  style={{ marginTop: 10 * d.height }}
                />
              </View>
              <Text style={styles.detailStyle}>
                {/* eslint-disable */}
                {
                  "Automatically send crash reports to Twitter's service provider to help improve this application."
                }
                {/* eslint-enable */}
              </Text>
            </View>
            <LinkCard
              text="Help Center"
              borderTopWidth={0.5}
              borderColor="#00000030"
              onPress={() => console.log('pressed')}
            />
          </View>
          <View style={styles.bigTitleView}>
            <Text style={styles.bigTitleStyle}>{'Legal'}</Text>
          </View>
          <View style={styles.ruleView}>
            <LinkCard text="Terms of service" onPress={() => console.log('pressed')} />
            <LinkCard
              text="Privacy policy"
              borderTopWidth={0.5}
              borderColor="#00000030"
              onPress={() => console.log('pressed')}
            />
            <LinkCard
              text="Cookie use"
              borderTopWidth={0.5}
              borderColor="#00000030"
              onPress={() => console.log('pressed')}
            />
            <LinkCard
              text="Legal notices"
              borderTopWidth={0.5}
              borderColor="#00000030"
              onPress={() => console.log('pressed')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    borderBottomWidth: 1,
    borderBottomColor: '#00000010',
    paddingTop: 20 * d.height
  },
  headerTextView: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
    paddingTop: 30
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: '800'
  },
  bodyView: {
    backgroundColor: '#EBEEF2'
  },
  cardView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomColor: '#00000030',
    borderTopColor: '#00000030'
  },
  ruleView: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomColor: '#00000030',
    borderTopColor: '#00000030'
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 10 * d.width,
    paddingTop: 13 * d.height,
    paddingBottom: 13 * d.height
  },
  detailStyle: {
    color: '#00000070',
    marginRight: 10 * d.width,
    fontSize: 14,
    paddingTop: 13 * d.height,
    paddingBottom: 13 * d.height
  },
  bigTitleView: {
    paddingTop: 20 * d.height,
    paddingBottom: 10 * d.height,
    paddingLeft: 10 * d.width
  },
  bigTitleStyle: {
    fontSize: 22,
    color: '#00000070',
    fontWeight: '900'
  }
});
