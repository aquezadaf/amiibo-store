import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { useTranslation } from 'react-i18next';
// import styles from './ProductGrid.module.css'
// import ProductCard from '../../components/ProductCard'
import ProductGrid from '../../components/ProductGrid'

export default class ProductsScreen extends Component {
    static propTypes = {
        retrieveProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        // isLoading: PropTypes.bool.isRequired,
        // error: PropTypes.string
    }

    componentDidMount() {
        this.props.retrieveProducts()
    }

    render() {
        const { products } = this.props
        return (
            <ProductGrid products={products} />
        )
    }
}
