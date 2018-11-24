import React, { Component } from 'react';
import MainPage from '@/components/main/MainPage';

import { Provider } from "react-redux";
import { store } from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
  }
}

export default App;