import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import App from './App';

const AppWrapper = () => (
  <>
    <Provider store={store}>
      <Router>
        <Route path="/:filter?" component={App} />
      </Router>
    </Provider>
  </>
);


export default AppWrapper;
