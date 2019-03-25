import { SEARCH_USER, FETCH_USER, FETCH_POST, FETCH_ALBUM, FETCH_PHOTO } from './types';
import axios from 'axios';

export const searchUser = value => ({
  type: SEARCH_USER,
  newValue: value
});

export const fetchAllUsers = () => async (dispatch) => {
  await axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
      dispatch({
          type: FETCH_USER,
          payload: res.data
      })
  })
  .catch(err => {
    throw(err);
  })
};

export const fetchAllPosts = () => async (dispatch) => {
  await axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
      dispatch({
          type: FETCH_POST,
          payload: res.data
      })
  })
  .catch(err => {
    throw(err);
  })
};

export const fetchAllAlbums = () => async (dispatch) => {
  await axios.get('https://jsonplaceholder.typicode.com/albums')
  .then(res => {
      dispatch({
          type: FETCH_ALBUM,
          payload: res.data
      })
  })
  .catch(err => {
    throw(err);
  })
};

export const fetchAllPhotos = () => async (dispatch) => {
  await axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(res => {
      dispatch({
          type: FETCH_PHOTO,
          payload: res.data
      })
  })
  .catch(err => {
    throw(err);
  })
};
