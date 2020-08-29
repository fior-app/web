import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import FiorApp from './fior-app';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';
import AxiosConfig from './config/axios-config';
import 'semantic-ui-css/semantic.min.css';

import './styles.css';

AxiosConfig.config();

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <FiorApp />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
