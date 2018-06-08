import React from 'react';
import {shallow,mount} from 'enzyme';
import {Dashboard} from './Dashboard';

describe('<Dashboard />', () => {
    
    it('should render without crashing', () => {
        const dispatch = jest.fn();  
        shallow(<Dashboard dispatch={dispatch}/>);
    })
    
});