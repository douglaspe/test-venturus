import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ThroughProvider } from 'react-through';
import './index.scss';

import App from './app/App';
import rootReducer from './reducers';
import { fetchAllPosts, fetchAllUsers, fetchAllPhotos, fetchAllAlbums } from './actions';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllUsers());
store.dispatch(fetchAllPosts());
store.dispatch(fetchAllPhotos());
store.dispatch(fetchAllAlbums());

ReactDOM.render(
  <Provider store={store}>
    <ThroughProvider>
      <App />
    </ThroughProvider>
  </Provider> , document.getElementById('root'));


serviceWorker.unregister();
