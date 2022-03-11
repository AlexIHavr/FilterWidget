import { combineReducers, compose, createStore } from 'redux';

const rootReducer = function () {}; //combineReducers({ youTubeVideos: youTubeVideosReducer });

const store = createStore(
  rootReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
