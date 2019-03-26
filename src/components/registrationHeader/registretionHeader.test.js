import React from 'react';
import { shallow } from 'enzyme';

import RegistrationHeader from './registrationHeader'

describe('<RegistrationHeader />', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<RegistrationHeader />));

  it('should render <RegistrationHeader /> component', () => {
    expect(wrapper).toHaveLength(1);
  });

});
