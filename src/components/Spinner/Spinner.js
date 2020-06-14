import React from 'react';
import { useTranslation } from 'react-i18next';
import spinner from './img/spinner.svg'
import styles from './Spinner.module.css'

export default function Spinner() {
  const { t } = useTranslation();
  return (
    <div className={styles.loader}>
      <img src={spinner} alt="spinner" />
      <div className={styles.text}>{t('loading')}</div>
    </div>
  );
}
