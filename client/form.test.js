import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Form from './src/components/Form'
// import App from './src/index'

//sample test
describe('Form', () => {
  const pageMounted = mount(<Form />);
  const pageRendered = render(<Form />);

  const sampleData = [{
      _id: '5c9fe75de932d6cdda1cc370',
      agent_name: 'Ella-Rose Robles',
      recent_sales: 16,
      phone: '(268) 345-8161',
      agent_type: 'listing',
      average_stars: 4.83,
      num_ratings: 263,
      agent_photo: 'https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor12.jpg',
      __v: 0
    },
    {
      _id: '5c9fe75de932d6cdda1cc382',
      agent_name: 'Bethany Dunkley',
      recent_sales: 3,
      phone: '(110) 107-8582',
      agent_type: 'premier',
      average_stars: 3.3,
      num_ratings: 1,
      agent_photo: 'https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor30.jpg',
      __v: 0
    },
    {
      _id: '5c9fe75de932d6cdda1cc398',
      agent_name: 'Samiyah Nairn',
      recent_sales: 53,
      phone: '(426) 645-8043',
      agent_type: 'premier',
      average_stars: 4.11,
      num_ratings: 88,
      agent_photo: 'https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor52.jpg',
      __v: 0
    },
    {
      _id: '5c9fe75de932d6cdda1cc3c6',
      agent_name: 'Jennifer Nummerdor',
      recent_sales: 31,
      phone: '(400) 086-0825',
      agent_type: 'premier',
      average_stars: 2.84,
      num_ratings: 330,
      agent_photo: 'https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor98.jpg',
      __v: 0
    }
  ]

  test('should call componentWillMount', () => {
    const spy = jest.spyOn(Form.prototype, 'componentWillMount');
    const page = mount( <Form/> );
    expect(spy).toHaveBeenCalled();
    expect(page.state.length).not.toBe(0)
    spy.mockReset();
    spy.mockRestore();
  });

  test('renders something in the form component', () => {
    const wrapper = mount(<div className="form-outer-container"/>);
    expect(wrapper.exists(".form-outer-container")).toBe(true);
    expect(wrapper.find(".form-outerrr-container").exists()).toBe(false);
  });

  test('should have an array with data in it', () => {
    expect(sampleData.length).toBe(4)
    expect(typeof sampleData[0].recent_sales).toBe('number')
    expect(Array.isArray(sampleData)).toBe(true)
  })

  test('a button should exist', () => {
    const button = pageMounted.find('.form-contact-button');
    expect(button.length).toBe(1);
  });

  test('it should have 4 places on input form for text', () => {
    const input = pageMounted.find('input[type="text"]')
    expect(input.length).toBe(4);
  });

  test('it should have a checkbox', () => {
    const input = pageMounted.find('input[type="checkbox"]')
    expect(input.length).toBe(1);
  });

  test('it should render the type of agent', () => {
    const wrapper = mount(<div className="form-agent-type"/>);
    expect(wrapper.find(".form-agent-type").exists()).toBe(true)
  });
});