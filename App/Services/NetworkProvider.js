import React from 'react'
import NetInfo from '@react-native-community/netinfo'

export const NetworkContext = React.createContext({ isConnected: true })

export default class NetworkProvider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.unsubscribe = null
  }

  state = {
    isConnected: true,
  }

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener((state) => {
      this.setState({ isConnected: state.isConnected })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected })
  }

  render() {
    return <NetworkContext.Provider value={this.state}>{this.props.children}</NetworkContext.Provider>
  }
}
