import React from 'react';
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import styles from './ShoppingCartList.module.css';

function ShoppingCartList(props) {
    const { products } = props
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.shoppingCart}>
                <div className={styles.item}>
                    <span>
                        <div className={styles.name}>Sony DSC-RX100M III</div>
                        <div className={styles.quantity}>$849.99 x 1</div>
                    </span>
                    <span>
                        <button className={styles.editButton}>{t('shoppingCart.add')}</button>
                        <button className={styles.editButton}>{t('shoppingCart.subtract')}</button>
                    </span>
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
    }))
}

export default ShoppingCartList



