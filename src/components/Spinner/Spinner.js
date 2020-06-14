import React from 'react';
import spinner from './img/spinner.svg'
import styles from './Spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles.loader} title="0">
      <img src={spinner} alt="spinner" />
    </div>
  );
}
