import { connect } from 'react-redux'
import Products from '../screens/Products'
import selectors from '../selectors'
import actions from '../actions'


const mapStateToProps = state => ({
    products: selectors.amiibo.amiibosSelector(state)
});

const mapDispatchToProps = dispatch => ({
    retrieveProducts: () =>  dispatch(actions.amiibo.getAllAmiibosThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
