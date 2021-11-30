import React from 'react';
import ReactDOM from 'react-dom';
import App from './Screens/MainApp/App';
import reportWebVitals from './reportWebVitals';
import './styles/scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
