import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Honeybadger from 'honeybadger-js'
import ErrorBoundary from '@honeybadger-io/react'

Honeybadger.configure({
  apiKey: '0eac373d',
  environment: 'debug',
})

ReactDOM.render(
  <ErrorBoundary honeybadger={Honeybadger}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
