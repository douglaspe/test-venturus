import React from 'react';
import { shallow } from 'enzyme';

import UsersHeader from './usersHeader';
import UserSearch from '../userSearch/userSearch';

describe('<UsersHeader />', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<UsersHeader />));

  it('should render Component <UsersHeader />', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render the <UserSearch /> Component', () => {
      expect(wrapper.containsMatchingElement(<UserSearch />)).toEqual(true);
  });

});
