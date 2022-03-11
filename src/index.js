import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
