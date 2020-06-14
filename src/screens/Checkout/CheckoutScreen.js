import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutList from '../../containers/CheckoutList'
import styles from './CheckoutScreen.module.css'

export default class CheckoutScreen extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className={styles.container}>
                <CheckoutList />
            </div>
        );
    }
}
