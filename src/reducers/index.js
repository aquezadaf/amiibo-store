import { combineReducers } from 'redux';
import amiiboReducer from './amiibo'
import shoppingCartReducer from './shoppingCart'

const rootReducer = combineReducers({
    amiibo: amiiboReducer,
    shoppingCart: shoppingCartReducer
});

export default rootReducer;
