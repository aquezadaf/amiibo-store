import React from 'react'
import { shallow } from 'enzyme'
import Spinner from './Spinner'

it('renders spinner', () => {
    const wrapper = shallow(<Spinner />)
    expect(wrapper.html()).toMatchSnapshot()
})
