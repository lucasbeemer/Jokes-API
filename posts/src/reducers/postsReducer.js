import * as actionTypes from '../actions';

const initialState = {
  posts: [],
  gettingPosts: false,
  updatingPost: false,
  creatingPost: false,
  deletingPost: false,
  error: null
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_POSTS:
      return { ...state, gettingPosts: true };
    case actionTypes.GET_POSTS:
      return { ...state, posts: action.payload, gettingPosts: false };
    case actionTypes.UPDATING_POST:
      return { ...state, updatingPost: true };
    case actionTypes.UPDATE_POST:
      return { ...state, posts: action.payload, updatingPost: false };
    case actionTypes.DELETING_POST:
      return { ...state, deletingPost: true };
    case actionTypes.DELETE_POST:
      return { ...state, posts: action.payload, deletingPost: false };
    case actionTypes.CREATING_POST:
      return { ...state, creatingPost: true };
    case actionTypes.CREATE_POST:
      return { ...state, posts: action.payload, creatingPost: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingPosts: false,
        creatingPost: false,
        deletingPost: false,
        updatingPost: false,
        error: action.payload
      };
    default:
      return state;
  }
};