import React from 'react';// because of the jsx
import { shallow } from 'enzyme'; //help in creating snapshot
import {Header} from '../../components/Header';

test('should render Header correctly', () =>  {
    const wrapper = shallow(<Header startLogout = {() => {}} />);
    expect(wrapper).toMatchSnapshot();
});