import { connect } from 'react-redux'
import ProductCard from '../components/ProductCard'
import actions from '../actions'

const mapDispatchToProps = dispatch => ({
    onPress: (product) =>  dispatch(actions.shoppingCart.addProductToCart(product))
});

export default connect(null, mapDispatchToProps)(ProductCard);
