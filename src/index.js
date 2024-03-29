import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Main from './components/Main.js';
import AppRouter from "./router/AppRouter";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<AppRouter />,
  // <React.StrictMode>
  //   <Main />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
