import React from 'react'
import { shallow } from 'enzyme'
import ProductGrid from './ProductGrid'
import ProductCard from "../../containers/ProductCard";

jest.mock("../../containers/ProductCard", () => () => null);

const defaultProps = {
    products: [{
        id: '01',
        image: 'http://...',
        name: 'Name',
        type: 'Type',
        price: 1000
  }]
}

it('renders product grid', () => {
    const wrapper = shallow(<ProductGrid {...defaultProps} />)
    expect(wrapper.html()).toMatchSnapshot()
})

it('passes products to product card', () => {
    const wrapper = shallow(<ProductGrid {...defaultProps} />)
    const props = wrapper.find(ProductCard).at(0).props()
    expect(props).toEqual(defaultProps.products[0])
})
