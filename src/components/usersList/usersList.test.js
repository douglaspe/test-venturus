import React from 'react'
import { shallow } from 'enzyme';

import UsersList from './usersList';

describe('<UsersList />', () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<UsersList />));

  it('should render <UsersList /> Component', () => {
      expect(wrapper.length).toBe(1);
  });

});
