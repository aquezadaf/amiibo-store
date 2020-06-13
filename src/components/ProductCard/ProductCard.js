import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import styles from './ProductCard.module.css'

function ProductCard(props) {
    const { picture, name, type, price } = props
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <img className={styles.picture} src={picture} alt="amiibo" />
            <div className={styles.product}>
                <div className={styles.name}>{name}</div>
                <div className={styles.type}>{type}</div>
                <div className={styles.price}>$ {price}</div>
                <button className={styles.button}>{t('product.addToCart')}</button>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default ProductCard