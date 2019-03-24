import { types } from './types';
import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        dispatch({
            type: types.GET_USERS,
            payload: res.data
        })
    })
    .catch(err => {
        // console.log(err);
    })
};
