import { FETCH_USER } from '../../actions/types';
import usersReducer from './reducer';

describe('Users Reducer', () => {

    it('Should return default state', () => {
        const newState = usersReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {

        const users = [];
        const newState = usersReducer(undefined, {
          types: FETCH_USER,
          payload: users
        });
        expect(newState).toEqual(users);

    });

});
