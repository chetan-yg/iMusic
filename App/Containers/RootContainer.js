import React, { Component } from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { AppNavigation } from '../Navigation/AppNavigation'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  render() {
    return (
      <View style={styles.applicationView}>
      <SafeAreaView  style={styles.applicationView}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(null, mapDispatchToProps)(RootContainer)