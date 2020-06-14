import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import styles from './CheckoutList.module.css'

function CheckoutList(props) {
    const { products } = props
    const { t } = useTranslation()
    return (
        <div className={styles.container}>
            <div className={styles.title}>{t('checkoutList.title')}</div>
            <div className={styles.products}>
                {products.map(product => <div key={product.id}>
                    <div className={styles.product}>
                        <img className={styles.image} src={product.image} alt="amiibo" />
                        <div>
                            <div className={styles.name}>{product.name}</div>
                            <div className={styles.price}>$ {product.price} x {product.quantity}</div>
                        </div>
                    </div>
                </div>)}
                <div className={styles.totalContainer}>
                    <span className={styles.total}>{t('checkoutList.total')}</span>
                    <span className={styles.total}>${products.reduce((total, { quantity, price }) => total + (quantity * price), 0)}</span>
                </div>
            </div>
        </div>
    )
}

CheckoutList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }))
}

export default CheckoutList
