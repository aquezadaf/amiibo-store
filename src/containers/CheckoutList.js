import { connect } from 'react-redux'
import CheckoutList from '../components/CheckoutList'
import selectors from '../selectors'

const mapStateToProps = state => ({
    products: selectors.shoppingCart.productsSelector(state)
});

export default connect(mapStateToProps, null)(CheckoutList);
