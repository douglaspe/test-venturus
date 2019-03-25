import { FETCH_ALBUM } from '../../actions/types';

export default (state=[], action) => {
    switch(action.type){
        case FETCH_ALBUM:
          return action.payload;
        default:
            return state;
    }
};
