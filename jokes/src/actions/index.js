import axios from 'axios'

export const FETCHING_JOKES = 'FETCHING_JOKES';
export const FETCHED_JOKES = 'FETCHED_JOKES';
export const SAVING_JOKES = 'SAVING_JOKES';
export const SAVED_JOKES = 'SAVED_JOKES';
export const UPDATING_JOKES = 'UPDATING_JOKES';
export const UPDATED_JOKES = 'UPDATED_JOKES';
export const DELETING_JOKES = 'DELETING_JOKES';
export const DELETED_JOKES = 'DELETED_JOKES';
export const ERROR = 'ERROR';

export const getJokes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_JOKES })
    axios.get('http://localhost:5000/api/jokes')
      .then(res => {
        dispatch({ type: FETCHED_JOKES, payload: res.data })
      })
      .catch(error => {
        dispatch({ type: ERROR })
      })
  }
}

export const addJoke = joke => {
  return dispatch => {
    dispatch({ type: SAVING_JOKES })
    axios.post('http://localhost:5000/api/jokes', {
      q: joke.q,
      p: joke.p
    })
      .then(res => {
        dispatch({ type: SAVED_JOKES, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export const updateJoke = joke => {
  return dispatch => {
    dispatch({ type: UPDATING_JOKES });
    axios.put(`http://localhost:5000/api/jokes/${joke.id}`, {
      q: joke.q,
      p: joke.p,
    })
      .then(res => {
        dispatch({ type: UPDATED_JOKES, payload: res.data })
      })
      .catch(err => {
        dispatch({ TYPE: ERROR, payload: err });
      })
  }
}

export const deleteJoke = jokeId => {
  return dispatch => {
    dispatch({ type: DELETING_JOKES });
    axios.delete(`http://localhost:5000/api/jokes/${jokeId}`)
      .then(res => {
        dispatch({ type: DELETED_JOKES, payload: res.data })
      })
      .catch(err => {
        dispatch({ TYPE: ERROR, payload: err });
      })
  }
}