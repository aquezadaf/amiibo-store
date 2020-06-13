import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from './img/logo.svg';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  const { t } = useTranslation();
  return (
    <nav className={styles.container}>
      <div>
        <Link to="/" className={styles.link}>
          <img src={logo} className={styles.image} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/cart" className={styles.link}>
        {t('navigationBar.cart')} <span className={styles.badge}>3</span>
        </Link>
      </div>
    </nav>
  );
}
