import React from 'react'
import { shallow } from 'enzyme';
import axios from 'axios';

import UsersList from './usersList';

describe('<UsersList />', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<UsersList />));

    it('should render <tr> Component', () => {
        //expect(wrapper.find('tr').length).toEqual(1);
    });

    const API = 'https://jsonplaceholder.typicode.com/users';

    it('should async API call', async () => {
        const req = await axios.get(API);
        const underTest = req.data[0];
        expect(underTest.name).toBe('Leanne Graham');
    });

}); 