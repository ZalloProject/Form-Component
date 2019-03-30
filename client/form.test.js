import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Form from './src/components/Form'
// import App from './src/index'


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe ('Form', () => {
  it('renders something in the form component', () => {
    const wrapper = mount(<div className="form-outer-container" />)
    expect(wrapper.exists(".form-outer-container")).toBe(true)
    expect(wrapper.find(".form-outerrr-container").exists()).toBe(false)
  })
})

