import { combineReducers, compose, createStore } from 'redux';
import filterWidgetReducer from './FilterWidget/reducer';

const rootReducer = combineReducers({ filterWidget: filterWidgetReducer });

const store = createStore(
  rootReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
