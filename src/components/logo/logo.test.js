import React from 'react'
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './logo';

describe('<Logo />', () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<Logo />));

  it('should render <Logo /> Component without errors', () => {
      expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    expect(wrapper.find('.logo').length).toBe(1);
  });

  it('should render the <FontAwesomeIcon /> Component', () => {
    expect(wrapper.containsMatchingElement(<FontAwesomeIcon />)).toEqual(true);
  });

});
