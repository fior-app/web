import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import FiorApp from './fior-app';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';
import AxiosConfig from './config/axios-config';
import 'semantic-ui-css/semantic.min.css';

import './styles.css';
import firebaseConfig from './config/firebase-config';

AxiosConfig.config();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }),
    ),
    reduxFirestore(firebaseConfig),
  ),
);

const rrfProps = {
  firebase,
  config: {
    useFirestoreForStorageMeta: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <FiorApp/>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
