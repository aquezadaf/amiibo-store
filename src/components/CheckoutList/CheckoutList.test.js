import React from 'react'
import { shallow } from 'enzyme'
import CheckoutList from './CheckoutList'

const defaultProps = {
    products: [{
        id: '01',
        image: 'http://01',
        name: 'First Amiibo',
        price: 10000,
        quantity: 1
    }, {
        id: '02',
        image: 'http://02',
        name: 'Second Amiibo',
        price: 20000,
        quantity: 2
    }]
}

it('renders all products', () => {
    const wrapper = shallow(<CheckoutList {...defaultProps} />)
    expect(wrapper.html()).toMatchSnapshot()
})

it('renders total of products', () => {
    const wrapper = shallow(<CheckoutList {...defaultProps} />)
    const total = wrapper.find('.total').at(1).text()
    expect(total).toEqual("$50000")
})
