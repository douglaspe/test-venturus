import { SEARCH_USER, FETCH_USER } from '../../actions/types';

const initialState = {
  newValue: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
}
