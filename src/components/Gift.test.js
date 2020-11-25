import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Gift from './Gift';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('Gift', () => {
  const gift = shallow(<Gift/>)

  it('render properly', () => {
    expect(gift).toMatchSnapshot()
  })

  it('initialize a person and present in `state`', () => {
    expect(gift.state()).toEqual({person: '', present: ''})
  })

  describe('when typing into the person `input`', () => {
    beforeEach(() => {
      gift.find('.input-person').simulate('change', {target: {value: 'Mom'}})
    })

    it('update the person in `state`', () => {
      expect(gift().this.state()).toEqual('Mom')
    })
  })
})
