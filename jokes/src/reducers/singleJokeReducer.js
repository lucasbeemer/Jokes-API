import * as actionTypes from '../actions';

const initialState = {
  jokeSelected: {},
  showUpdate: false
};

export const singleJokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_JOKE:
      return { ...state, jokeSelected: action.payload, showUpdate: false };
    case actionTypes.TOGGLE_UPDATE_JOKE:
      return { ...state, showUpdate: !state.showUpdate };
    default:
      return state;
  }
};