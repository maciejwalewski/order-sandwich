import { MainPage, OrderPage, AccountPage } from '@/components/main/index';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { store } from './store/store';

const App = () => (
  <Provider store={ store }>
    <HashRouter>
      <Fragment>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/order" component={ OrderPage } />
        <Route exact path="/account" component={ AccountPage } />
      </Fragment>
    </HashRouter>
  </Provider>
);

export default App;
