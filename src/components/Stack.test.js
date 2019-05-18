import React from 'react';
import { shallow } from 'enzyme';
import Stack from './Stack';

describe('Stack component', ()=>{
  it('renders a stack div with logos and title', ()=>{
    const wrapper = shallow(<Stack/>);
    expect(wrapper).toMatchSnapshot();
  })
})