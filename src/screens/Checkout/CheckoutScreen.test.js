import React from 'react'
import { shallow } from 'enzyme'
import CheckoutScreen from './CheckoutScreen'
import CheckoutList from "../../components/CheckoutList";

jest.mock("../../components/CheckoutList", () => () => null)

it('renders message when receiving empty products', () => {
    const wrapper = shallow(<CheckoutScreen products={[]} />)
    expect(wrapper.html()).toMatchSnapshot()
})

it('renders CheckoutList with products when at least one product', () => {
    const wrapper = shallow(<CheckoutScreen products={[{ id: 1 }]} />)
    const { products } = wrapper.find(CheckoutList).props()
    expect(products).toEqual([{ id: 1 }])
})
