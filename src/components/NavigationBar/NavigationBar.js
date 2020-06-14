import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.svg';
import styles from './NavigationBar.module.css';
import ShoppingCart from '../../containers/ShoppingCart'

export default function NavigationBar() {
  return (
    <nav className={styles.container}>
      <div>
        <Link to="/">
          <img src={logo} className={styles.image} alt="logo" />
        </Link>
      </div>
      <div>
        <ShoppingCart />
      </div>
    </nav>
  );
}
