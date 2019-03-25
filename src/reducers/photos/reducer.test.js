import { FETCH_PHOTO } from '../../actions/types';
import photosReducer from './reducer';

describe('Photos Reducer', () => {

    it('Should return default state', () => {
        const newState = photosReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const photos = [];
        const newState = photosReducer(undefined, {
          types: FETCH_PHOTO,
          payload: photos
        });
        expect(newState).toEqual(photos);
    });

});
