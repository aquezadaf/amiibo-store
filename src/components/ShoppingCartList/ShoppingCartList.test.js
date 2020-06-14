import React from 'react'
import { shallow } from 'enzyme'
import ShoppingCartList from './ShoppingCartList'

jest.mock("react-router-dom");

const defaultProps = {
    products: [{
        id: '01',
        name: 'First Amiibo',
        price: 10000,
        quantity: 1
    }, {
        id: '02',
        name: 'Second Amiibo',
        price: 20000,
        quantity: 10
    }],
    onIncrementProduct: () => {},
    onSubtractProduct: () => {}
}

it('renders all products', () => {
    const wrapper = shallow(<ShoppingCartList {...defaultProps} />)
    expect(wrapper.html()).toMatchSnapshot()
})

it('returns product when pressing addition button', () => {
    const incrementMock = jest.fn()
    const wrapper = shallow(<ShoppingCartList {...defaultProps} onIncrementProduct={incrementMock} />)
    wrapper.find('button').at(0).simulate('click')
    expect(incrementMock).toHaveBeenCalledWith(defaultProps.products[0])
})

it('returns product when pressing subtraction button', () => {
    const decrementMock = jest.fn()
    const wrapper = shallow(<ShoppingCartList {...defaultProps} onSubtractProduct={decrementMock} />)
    wrapper.find('button').at(1).simulate('click')
    expect(decrementMock).toHaveBeenCalledWith(defaultProps.products[0])
})

it('renders total of products', () => {
    const wrapper = shallow(<ShoppingCartList {...defaultProps} />)
    const total = wrapper.find('.total').at(1).text()
    expect(total).toEqual("$ 210000")
})
