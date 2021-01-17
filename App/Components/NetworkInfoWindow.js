import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './Styles/NetworkInfoWindowStyle';
import {StringsConstants} from '../Constants';

const TAG = 'NetworkInfoWindow';
export default class NetworkInfoWindow extends Component {
  static defaultProps = {
    text: StringsConstants.NO_INTERNET_CONNECTION,
  };

 
  componentDidUpdate(prevProps) {
    if (
      this.props.isNetworkConnected !== prevProps.isNetworkConnected &&
      this.props.onNetworkChange
    ) {
      this.props.onNetworkChange(this.props.isNetworkConnected);
    }
  }

  render() {
    return (
      <View>
        {!this.props.isNetworkConnected ? (
          <View style={[styles.errorContainer, this.props.styles]}>
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}
