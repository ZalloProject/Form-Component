import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Form from './src/components/Form'
// import App from './src/index'

//sample test
describe ('Form', () => {
  it('renders something in the form component', () => {
    const wrapper = mount(<div className="form-outer-container" />);
    expect(wrapper.exists(".form-outer-container")).toBe(true);
    expect(wrapper.find(".form-outerrr-container").exists()).toBe(false);
  });
});