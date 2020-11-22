import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

const app = shallow(<App/>)

it('render correctly', () => {
  expect(app).toMatchSnapshot()
})

it('initialize the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
})

it('adds a new gift to the `state` when clicking the `add-gift` button', ()=> {
  app.find('.btn-add').simulate('click')
  expect(app.state().gifts).toEqual([{id: 1}])
})
