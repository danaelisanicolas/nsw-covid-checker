import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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