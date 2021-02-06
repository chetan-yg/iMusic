import React, {Component, useContext} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import NetworkInfoWindow from '../Components/NetworkInfoWindow';
import {AppNavigation} from '../Navigation/AppNavigation';
import {NetworkContext} from '../Services/NetworkProvider';
import styles from './Styles/RootContainerStyles';

const RootContainer = (props) => {
  const context = useContext(NetworkContext);
  return (
    <View style={styles.applicationView}>
      <SafeAreaView style={styles.applicationView}>
        <StatusBar />
        <AppNavigation />
        <NetworkInfoWindow isNetworkConnected={context.isConnected} />
      </SafeAreaView>
    </View>
  );
};
export default RootContainer;
