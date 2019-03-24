import React from 'react';
import { shallow } from 'enzyme';

import UsersTable from './usersTable';
import UsersList from '../usersList/usersList';

describe('<UsersTable />', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<UsersTable />));

    it('should render the tag <UsersTable />', () => {
      expect(wrapper).toHaveLength(1);
    });

    it('should render the <UsersList /> Component', () => {
        expect(wrapper.containsMatchingElement(<UsersList />)).toEqual(true);
    });

});
