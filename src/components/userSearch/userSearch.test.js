import React from 'react';
import { shallow } from 'enzyme';

import UserSearch from './userSearch';

describe('<UserSearch />', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<UserSearch />));

  it('should render Component <UserSearch />', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Should render a Form', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

});
