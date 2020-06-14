import { combineReducers } from 'redux';
import amiiboReducer from './amiibo'

const rootReducer = combineReducers({
    amiibo: amiiboReducer
});

export default rootReducer;
