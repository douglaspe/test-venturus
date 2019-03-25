import { FETCH_ALBUM } from '../../actions/types';
import albumsReducer from './reducer';

describe('Albums Reducer', () => {

    it('Should return default state', () => {
        const newState = albumsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const albums = [];
        const newState = albumsReducer(undefined, {
          types: FETCH_ALBUM,
          payload: albums
        });
        expect(newState).toEqual(albums);
    });

});
