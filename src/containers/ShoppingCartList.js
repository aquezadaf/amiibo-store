import { connect } from 'react-redux'
import ShoppingCartList from '../components/ShoppingCartList'
import selectors from '../selectors'
import actions from '../actions'

const mapStateToProps = state => ({
    products: selectors.shoppingCart.productsSelector(state)
});

const mapDispatchToProps = dispatch => ({
    onIncrementProduct: (product) =>  dispatch(actions.shoppingCart.addProductToCart(product)),
    onSubtractProduct: (product) =>  dispatch(actions.shoppingCart.subtractProductFromCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartList);
