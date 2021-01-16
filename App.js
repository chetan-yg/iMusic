import React, { Component } from 'react'
import { Provider } from 'react-redux';
import RootContainer from './App/Containers/RootContainer';
import createStore from './App/Redux';

const store = createStore();

class App extends Component {
  render() {
  return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
     )
  }
}

export default App;
