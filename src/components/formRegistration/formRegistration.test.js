import React from 'react';
import { shallow } from 'enzyme';

import FormRegistration from './formRegistration';
import RegistrationHeader from '../registrationHeader/registrationHeader';

describe('<FormRegistration />', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<FormRegistration />));

    it('should render Component <FormRegistration />', () => {
      expect(wrapper).toHaveLength(1);
    });

    it('Should render a form', () => {
      expect(wrapper.find('form').length).toBe(1);
    });

    it('should render the <RegistrationHeader /> Component', () => {
      expect(wrapper.containsMatchingElement(<RegistrationHeader />)).toEqual(true);
  });

});
