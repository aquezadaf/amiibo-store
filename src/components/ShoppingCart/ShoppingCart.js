import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Translation } from 'react-i18next';
import ShoppingCartList from '../../containers/ShoppingCartList';
import styles from './ShoppingCart.module.css';

export default class ShoppingCart extends Component {
    static propTypes = {
        count: PropTypes.number,
    }

    state = {
        showShoppingCartList: false,
    }

    handleShoppingCartClick = () => {
        if (!this.props.count) {
            return this.setState({ showShoppingCartList: false })
        }
        return this.setState({ showShoppingCartList: !this.state.showShoppingCartList })
    }

    render() {
        const { count } = this.props
        const { showShoppingCartList } = this.state
        return (
            <div>
                <div className={styles.container} onClick={this.handleShoppingCartClick}>
                    <span className={styles.text}>
                        <Translation>{(t) => t('navigationBar.cart')}</Translation>
                    </span>
                    {!!count && <span className={styles.badge}>{count}</span>}
                </div>
                {showShoppingCartList && <ShoppingCartList />}
            </div>
        );
    }
}
