import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-xlzgqkcfj7o2.frontegg.com',
  clientId: 'e788307b-aabd-4c5a-8bf5-72fd2723c9a9',
  appId: '06cce6c6-0da0-4076-a0a3-f1ce00aa9298'
};

const authOptions = {
  keepSessionAlive: true
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App />
  </FronteggProvider>
);
