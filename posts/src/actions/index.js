import axios from 'axios'

export const ERROR = 'ERROR';
export const GET_POSTS = 'GET_POSTS';
export const GETTING_POSTS = 'GETTING_POSTS';
export const CREATING_POST = 'CREATING_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const UPDATING_POST = 'UPDATING_POST';
export const DELETING_POST = 'DELETING_POST';
export const SINGLE_POST = 'SINGLE_POST';
export const TOGGLE_UPDATE_POST = 'TOGGLE_UPDATE_POST';

const URL = 'http://localhost:5000';

export const getPosts = () => {
  const posts = axios.get(`${URL}/posts`);
  return dispatch => {
    dispatch({ type: GETTING_POSTS });
    posts
      .then(response => {
        dispatch({ type: GET_POSTS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createPost = post => {
  const newPost = axios.post(`${URL}/posts`, post);
  return dispatch => {
    dispatch({ type: CREATING_POST });
    newPost
      .then(({ data }) => {
        dispatch({ type: CREATE_POST, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deletePost = id => {
  const deletedPost = axios.delete(`${URL}/posts/:id`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: DELETING_POST });
    deletedPost
      .then(({ data }) => {
        dispatch({ type: DELETE_POST, payload: data });
        dispatch({ type: SINGLE_POST, payload: {} });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_POST
  };
};

export const updateSinglePost = post => {
  return {
    type: SINGLE_POST,
    payload: post
  };
};