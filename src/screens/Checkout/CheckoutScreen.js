import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import CheckoutList from "../../components/CheckoutList";
import styles from "./CheckoutScreen.module.css";

function CheckoutScreen(props) {
  const { products } = props;
  const { t } = useTranslation();
  if (!products.length) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyMessage}>{t("checkout.empty")}</div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <CheckoutList products={products} />
    </div>
  );
}

CheckoutScreen.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CheckoutScreen;
