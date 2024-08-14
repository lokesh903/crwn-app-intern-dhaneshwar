import { CartActionTypes } from '../reducers/cartReducer';

export const asyncAddItemToCart = (value: object) => ({
	type: CartActionTypes.ADD_ITEM_CART,
	payload: value,
});

export const asyncRemoveItemFromCart = (value: number) => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: value,
});

export const asyncIncrementItemInCart = (value: number) => ({
	type: CartActionTypes.INCREMENT_ITEM_IN_CART,
	payload: value,
});

export const asyncDecrementItemInCart = (value: number) => ({
	type: CartActionTypes.DECREMENT_ITEM_IN_CART,
	payload: value,
});
export const asyncClearCart = () => ({
	type: CartActionTypes.CLEAR_CART,
});
