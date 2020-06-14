import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductGrid from '../../components/ProductGrid';
import Spinner from '../../components/Spinner';
import Retry from '../../components/Retry';

export default class ProductsScreen extends Component {
    static propTypes = {
        retrieveProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.string
    }

    componentDidMount() {
        this.props.retrieveProducts()
    }

    render() {
        const { products, isLoading, error, retrieveProducts } = this.props
        if (isLoading) {
            return <Spinner />
        }
        if (error) {
            return <Retry onPress={retrieveProducts} />
        }
        return (
            <ProductGrid products={products} />
        )
    }
}
