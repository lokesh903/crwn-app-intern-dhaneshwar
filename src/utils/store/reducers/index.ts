import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	products: productsReducer,
});

export default rootReducer;
