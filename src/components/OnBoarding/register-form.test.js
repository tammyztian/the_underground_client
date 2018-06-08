
import React from 'react';
import {shallow} from 'enzyme';
import RegisterForm from './register-form';

describe('<RegisterForm>', () => {
    it('should render without crashes', () => {
        shallow(<RegisterForm />);
    });
});