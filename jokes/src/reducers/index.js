import { combineReducers } from 'redux';
import { jokesReducer } from './jokesReducer';
import { singleJokeReducer } from './singleJokeReducer';

export default combineReducers({
  jokesReducer,
  singleJokeReducer
});