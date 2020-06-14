import React from 'react';
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import styles from './ShoppingCart.module.css';

function ShoppingCart(props) {
    const { count } = props
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <span className={styles.text}>{t('navigationBar.cart')}</span>
            { count && <span className={styles.badge}>{count}</span> }
        </div>
    );
}

ShoppingCart.propTypes = {
    count: PropTypes.number,
}

export default ShoppingCart
