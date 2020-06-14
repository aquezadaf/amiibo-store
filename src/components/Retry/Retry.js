import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import styles from "./Retry.module.css";

function Retry(props) {
  const { onPress } = props;
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.text}>{t("genericError")}</div>
      <button className={styles.button} onClick={onPress}>
        {t("retry")}
      </button>
    </div>
  );
}

Retry.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Retry;
