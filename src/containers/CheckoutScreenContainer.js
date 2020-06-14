import { connect } from 'react-redux'
import CheckoutScreen from '../screens/Checkout'
import selectors from '../selectors'

const mapStateToProps = state => ({
    products: selectors.shoppingCart.productsSelector(state)
});

export default connect(mapStateToProps, null)(CheckoutScreen);
