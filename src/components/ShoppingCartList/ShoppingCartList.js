import React from 'react';
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import styles from './ShoppingCartList.module.css';

function ShoppingCartList(props) {
    const { products, onIncrementProduct, onSubtractProduct } = props
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.shoppingCart}>
                {products.map(product => (
                    <div key={product.id} className={styles.item}>
                        <span>
                            <div className={styles.name}>{product.name}</div>
                            <div className={styles.quantity}>${product.price} x {product.quantity}</div>
                        </span>
                        <span>
                            <button
                                className={styles.editButton}
                                onClick={() => onIncrementProduct(product)}>{t('shoppingCart.add')}</button>
                            <button
                                className={styles.editButton}
                                onClick={() => onSubtractProduct(product)}>{t('shoppingCart.subtract')}</button>
                        </span>
                    </div>
                ))}
                <div className={styles.totalContainer}>
                    <span className={styles.total}>{t('shoppingCart.total')}</span>
                    <span className={styles.total}>$ {products.reduce((total, { quantity, price }) => total + (quantity * price), 0)}</span>
                </div>
                <a href="#" className={styles.button}>{t('shoppingCart.checkout')}</a>
            </div>
        </div>
    );
}

ShoppingCartList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })),
    onIncrementProduct: PropTypes.func.isRequired,
    onSubtractProduct: PropTypes.func.isRequired
}

export default ShoppingCartList
