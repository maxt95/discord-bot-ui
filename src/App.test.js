import React from 'react';
import { shallow } from 'enzyme'
import App from './App'

let component

const renderComponent = () => {
  component = shallow(<App />)  
}

beforeEach(() => {
  renderComponent()
})

it('renders without crashing', () => {
  expect(component.find('.App').length).toEqual(1)
});
