import React from 'react';// because of the jsx
import { shallow } from 'enzyme'; //help in creating snapshot
import NotFoundPage from '../../components/NotFoundPage';

test('should render Header correctly', () =>  {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});