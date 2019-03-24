import React from 'react'
import { mount, shallow } from 'enzyme';

import UsersList from './usersList';

describe('<UsersList />', () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<UsersList />));

  it('should render <UsersList /> Component', () => {
      expect(wrapper.length).toBe(1);
  });

  it('Should render a username', () => {
    const state = 'Leanne Graham';
    console.log(state);
    expect(state).toEqual("Leanne Graham");
  });

});
