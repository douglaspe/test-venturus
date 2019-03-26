import React from 'react'
import { shallow } from 'enzyme';

import Header from './header';
import Logo from '../logo/logo'

describe('<Header />', () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<Header />));

  it('should render <Header /> Component without errors', () => {
      expect(wrapper.length).toBe(1);
  });

  it('Should render a Header', () => {
    expect(wrapper.find('header').length).toBe(1);
  });

  it('should render the <Logo /> Component', () => {
    expect(wrapper.containsMatchingElement(<Logo />)).toEqual(true);
  });

});
