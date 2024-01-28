import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import your own styles if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance in your app, you can uncomment the line below
// Learn more about this function: https://bit.ly/CRA-vitals
reportWebVitals();
