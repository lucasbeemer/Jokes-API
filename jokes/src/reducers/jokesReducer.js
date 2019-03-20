import * as actionTypes from '../actions';

const initialState = {
  jokes: [],
  gettingJokes: false,
  updatingJoke: false,
  creatingJoke: false,
  deletingJoke: false,
  error: null
};

export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_JOKES:
      return { ...state, gettingJokes: true };
    case actionTypes.GET_JOKES:
      return { ...state, jokes: action.payload, gettingJokes: false };
    case actionTypes.UPDATING_JOKE:
      return { ...state, updatingJoke: true };
    case actionTypes.UPDATE_JOKE:
      return { ...state, jokes: action.payload, updatingJoke: false };
    case actionTypes.DELETING_JOKE:
      return { ...state, deletingJoke: true };
    case actionTypes.DELETE_JOKE:
      return { ...state, jokes: action.payload, deletingJoke: false };
    case actionTypes.CREATING_JOKE:
      return { ...state, creatingJoke: true };
    case actionTypes.CREATE_JOKE:
      return { ...state, jokes: action.payload, creatingJoke: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingJokes: false,
        creatingJoke: false,
        deletingJoke: false,
        updatingJoke: false,
        error: action.payload
      };
    default:
      return state;
  }
};