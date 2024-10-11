import { legacy_createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './rootReducer';

// import middleware when action return a function
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;