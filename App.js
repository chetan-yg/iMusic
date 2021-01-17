import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootContainer from './App/Containers/RootContainer';
import createStore from './App/Redux';
import NetworkProvider from './App/Services/NetworkProvider';

const {store, persistor} = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <NetworkProvider>
            <RootContainer />
          </NetworkProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
