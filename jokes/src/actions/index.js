import axios from 'axios'

export const ERROR = 'ERROR';
export const GET_JOKES = 'GET_JOKES';
export const GETTING_JOKES = 'GETTING_JOKES';
export const CREATING_JOKE = 'CREATING_JOKE';
export const CREATE_JOKE = 'CREATE_JOKE';
export const UPDATE_JOKE = 'UPDATE_JOKES';
export const DELETE_JOKE = 'DELETE_JOKE';
export const UPDATING_JOKE = 'UPDATING_JOKE';
export const DELETING_JOKE = 'DELETING_JOKE';
export const SINGLE_JOKE = 'SINGLE_JOKE';
export const TOGGLE_UPDATE_JOKE = 'TOGGLE_UPDATE_JOKE';

const URL = 'http://localhost:5000';

export const getJokes = () => {
  const jokes = axios.get(`${URL}/posts`);
  return dispatch => {
    dispatch({ type: GETTING_JOKES });
    jokes
      .then(response => {
        dispatch({ type: GET_JOKES, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createJoke = joke => {
  const newJoke = axios.post(`${URL}/posts`, joke);
  return dispatch => {
    dispatch({ type: CREATING_JOKE });
    newJoke
      .then(({ data }) => {
        dispatch({ type: CREATE_JOKE, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteJoke = id => {
  const deletedJoke = axios.delete(`${URL}/posts/:id`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: DELETING_JOKE });
    deletedJoke
      .then(({ data }) => {
        dispatch({ type: DELETE_JOKE, payload: data });
        dispatch({ type: SINGLE_JOKE, payload: {} });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_JOKE
  };
};

export const updateSingleJoke = joke => {
  return {
    type: SINGLE_JOKE,
    payload: joke
  };
};