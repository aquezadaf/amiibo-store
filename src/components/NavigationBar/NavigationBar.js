import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.svg';
import styles from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <nav className={styles.container}>
      <div>
        <Link to="/" className={styles.link}>
          <img src={logo} className={styles.image} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/cart" className={styles.link}>
          Cart<span className={styles.badge}>3</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
