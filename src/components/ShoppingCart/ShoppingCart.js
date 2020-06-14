import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ShoppingCart.module.css';

export default function NavigationBar() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
        <span className={styles.text}>{t('navigationBar.cart')}</span> <span className={styles.badge}>3</span>
    </div>
  );
}
