import { connect } from "react-redux";
import ShoppingCart from "../components/ShoppingCart";
import selectors from "../selectors";

const mapStateToProps = (state) => ({
  count: selectors.shoppingCart.productsSelector(state).length,
});

export default connect(mapStateToProps, null)(ShoppingCart);
