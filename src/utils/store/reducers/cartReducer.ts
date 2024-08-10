import { CartItem } from '../../types/types';
export enum CartActionTypes {
	ADD_ITEM_CART = 'ADD_ITEM_CART',
	REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
	INCREMENT_ITEM_IN_CART = 'INCREMENT_ITEM_IN_CART',
	DECREMENT_ITEM_IN_CART = 'DECREMENT_ITEM_IN_CART',
	CLEAR_CART = 'CLEAR_CART',
}
export interface CartState {
	cartItemCount: number;
	cartItemsTotal: number;
	cartItems: CartItem[];
}
const initialCartState: CartState = {
	cartItemCount: 0,
	cartItemsTotal: 0,
	cartItems: [],
};
type Action =
	| { type: CartActionTypes.ADD_ITEM_CART; payload: CartItem }
	| { type: CartActionTypes.REMOVE_ITEM_FROM_CART; payload: number }
	| { type: CartActionTypes.INCREMENT_ITEM_IN_CART; payload: number }
	| { type: CartActionTypes.DECREMENT_ITEM_IN_CART; payload: number }
	| { type: CartActionTypes.CLEAR_CART };

const cartReducer = (
	cartState = initialCartState,
	action: Action
): CartState => {
	switch (action.type) {
		case CartActionTypes.ADD_ITEM_CART:
			const exisitingCartItem = cartState.cartItems.find(
				item => item.id === action.payload.id
			);
			if (exisitingCartItem) {
				return {
					...cartState,
				};
			} else {
				return {
					...cartState,
					cartItems: [
						...cartState.cartItems,
						{ ...action.payload, quantity: 1 },
					],
					cartItemCount: cartState.cartItemCount + 1,
					cartItemsTotal: cartState.cartItemsTotal + action.payload.price,
				};
			}
		case CartActionTypes.REMOVE_ITEM_FROM_CART: {
			const indexToRemove = cartState.cartItems.findIndex(
				item => item.id === action.payload
			);
			if (indexToRemove === -1) return cartState;
			const itemToRemove = cartState.cartItems[indexToRemove];
			const updatedCartItems = [...cartState.cartItems];
			updatedCartItems.splice(indexToRemove, 1);
			return {
				...cartState,
				cartItems: updatedCartItems,
				cartItemCount: cartState.cartItemCount - 1,
				cartItemsTotal:
					cartState.cartItemsTotal - itemToRemove.price * itemToRemove.quantity,
			};
		}
		case CartActionTypes.INCREMENT_ITEM_IN_CART:
			const itemToIncrementQty = cartState.cartItems.find(
				item => item.id === action.payload
			);
			if (!itemToIncrementQty) return cartState;
			return {
				...cartState,
				cartItems: cartState.cartItems.map(item =>
					item.id === action.payload
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
				cartItemsTotal: cartState.cartItemsTotal + itemToIncrementQty?.price,
			};

		case CartActionTypes.DECREMENT_ITEM_IN_CART:
			const itemToDecrementQty = cartState.cartItems.find(
				item => item.id === action.payload
			);
			if (!itemToDecrementQty) return cartState;
			if (itemToDecrementQty.quantity > 1) {
				return {
					...cartState,
					cartItems: cartState.cartItems.map(item =>
						item.id === action.payload
							? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
							: item
					),
					cartItemsTotal: cartState.cartItemsTotal - itemToDecrementQty?.price,
				};
			} else {
				return { ...cartState };
			}

		case CartActionTypes.CLEAR_CART:
			return {
				...cartState,
				cartItems: [],
				cartItemCount: 0,
				cartItemsTotal: 0,
			};
		default:
			return cartState;
	}
};

export default cartReducer;
