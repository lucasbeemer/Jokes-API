import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { singlePostReducer } from './singlePostReducer';

export default combineReducers({
  postsReducer,
  singlePostReducer
});