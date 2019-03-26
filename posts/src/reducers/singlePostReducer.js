import * as actionTypes from '../actions';

const initialState = {
  postSelected: {},
  showUpdate: false
};

export const singlePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_POST:
      return { ...state, postSelected: action.payload, showUpdate: false };
    case actionTypes.TOGGLE_UPDATE_POST:
      return { ...state, showUpdate: !state.showUpdate };
    default:
      return state;
  }
};