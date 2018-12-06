import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from "./registerServiceWorker";
import configureStore from './store';
import { BrowserRouter } from "react-router-dom";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA