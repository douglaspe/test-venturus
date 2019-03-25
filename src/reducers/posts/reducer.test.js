import { FETCH_POST } from '../../actions/types';
import postsReducer from './reducer';

describe('Posts Reducer', () => {

    it('Should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const posts = [];
        const newState = postsReducer(undefined, {
          types: FETCH_POST,
          payload: posts
        });
        expect(newState).toEqual(posts);
    });

});
