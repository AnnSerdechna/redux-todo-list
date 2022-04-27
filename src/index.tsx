import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 *     "redux": "^4.1.2",
    "redux-devtools-extension": "^2.13.9"
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.1"
 */