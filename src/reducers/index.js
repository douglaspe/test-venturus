import { combineReducers } from 'redux';

import searchUsersReducer from './searchUsers/reducer';
import users from './users/reducer';
import posts from './posts/reducer';
import albums from './albums/reducer';
import photos from './photos/reducer';

const rootReducer = combineReducers({
  searchUsersReducer,
  users,
  posts,
  albums,
  photos
});

export default rootReducer;
