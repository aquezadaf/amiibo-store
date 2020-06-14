import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import styles from './ProductGrid.module.css'
import ProductCard from '../ProductCard'

function ProductGrid(props) {
    const { products } = props
    const { t } = useTranslation()
    return (
        <div className={styles.container}>
            <div className={styles.title}>{t('productGrid.title')}</div>
            <div className={styles.products}>
                {products.map(product => <ProductCard {...product} />)}
            </div>
        </div>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        picture: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }))
}

export default ProductGrid
