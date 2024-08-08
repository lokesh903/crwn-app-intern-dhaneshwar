import React, {
	createContext,
	useContext,
	useReducer,
	useMemo,
	Dispatch,
	ReactNode,
	useEffect,
} from 'react';
import { json } from 'react-router-dom';

interface CartItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}
interface ProductItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
interface CartState {
	cartItemCount: number;
	cartItemsTotal: number;
	cartItems: CartItem[];
	isCartOpen: boolean;
	isMenuOpen: boolean;
}

interface CartProviderProps {
	children: ReactNode;
}
interface CartContextDataValue {
	cartState: CartState;
	dispatch: Dispatch<Action>;
	toggleDrawer: (
		type: 'cart' | 'menu',
		open: boolean
	) => (event: React.KeyboardEvent | React.MouseEvent) => void;
	handleAddToCart: (product: ProductItem) => void;
	handleRemoveItemFromCart: (product: ProductItem) => void;
	handleIncrementItemQuantity: (product: ProductItem) => void;
	handleDecrementItemQuantity: (product: ProductItem) => void;
}

const initialState: CartState = {
	cartItemCount: 0,
	cartItemsTotal: 0,
	cartItems: [],
	isCartOpen: false,
	isMenuOpen: false,
};
type Action =
	| { type: 'ADD_ITEM_CART'; payload: CartItem }
	| { type: 'REMOVE_ITEM_FROM_CART'; payload: number }
	| { type: 'INCREMENT_ITEM_IN_CART'; payload: number }
	| { type: 'DECREMENT_ITEM_IN_CART'; payload: number }
	| { type: 'CLEAR_CART' }
	| { type: 'TOGGLE_CART'; payload: boolean }
	| { type: 'TOGGLE_MENU'; payload: boolean };

const reducer = (cartState: CartState, action: Action): CartState => {
	switch (action.type) {
		case 'ADD_ITEM_CART':
			const exisitingCartItem = cartState.cartItems.find(
				item => item.id === action.payload.id
			);
			if (exisitingCartItem) {
				return {
					...cartState,
					// cartItems: cartState.cartItems.map(item =>
					// 	item.id === action.payload.id
					// 		? { ...item, quantity: item.quantity + 1 }
					// 		: item
					// ),
					// // cartItemCount: cartState.cartItemCount + 1,
					// cartItemsTotal: cartState.cartItemsTotal + action.payload.price,
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
		case 'REMOVE_ITEM_FROM_CART': {
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
		case 'INCREMENT_ITEM_IN_CART':
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

		case 'DECREMENT_ITEM_IN_CART':
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

		case 'CLEAR_CART':
			return {
				...cartState,
				cartItems: [],
				cartItemCount: 0,
				cartItemsTotal: 0,
			};
		case 'TOGGLE_CART':
			return {
				...cartState,
				isCartOpen: action.payload,
			};
		case 'TOGGLE_MENU':
			return {
				...cartState,
				isMenuOpen: action.payload,
			};
		default:
			return cartState;
	}
};

export const CartDataContext = createContext<CartContextDataValue | undefined>(
	undefined
);

export const CartDataProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cartState, dispatch] = useReducer(reducer, initialState, initial => {
		const storedState = localStorage.getItem('cartState');
		return storedState ? JSON.parse(storedState) : initial;
	});
	const toggleDrawer =
		(type: 'cart' | 'menu', open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			if (type === 'cart') {
				dispatch({ type: 'TOGGLE_CART', payload: open });
			} else {
				dispatch({ type: 'TOGGLE_MENU', payload: open });
			}
		};
	const handleAddToCart = (product: ProductItem) => {
		const productWithQuantity = { ...product, quantity: 1 };
		dispatch({ type: 'ADD_ITEM_CART', payload: productWithQuantity });
	};
	const handleRemoveItemFromCart = (product: ProductItem) => {
		dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: product.id });
	};
	const handleIncrementItemQuantity = (product: ProductItem) => {
		dispatch({ type: 'INCREMENT_ITEM_IN_CART', payload: product.id });
	};
	const handleDecrementItemQuantity = (product: ProductItem) => {
		dispatch({ type: 'DECREMENT_ITEM_IN_CART', payload: product.id });
	};

	useEffect(() => {
		localStorage.setItem('cartState', JSON.stringify(cartState));
	}, [cartState]);

	const values = useMemo(() => {
		return {
			cartState,
			dispatch,
			toggleDrawer,
			handleAddToCart,
			handleRemoveItemFromCart,
			handleIncrementItemQuantity,
			handleDecrementItemQuantity,
		};
	}, [
		cartState,
		dispatch,
		handleAddToCart,
		handleRemoveItemFromCart,
		handleIncrementItemQuantity,
		handleDecrementItemQuantity,
	]);

	return (
		<CartDataContext.Provider value={values}>
			{children}
		</CartDataContext.Provider>
	);
};

// this Custom help to avoid importing many time in componet of useContext;
export const useCartDataContext = (): CartContextDataValue => {
	const context = useContext(CartDataContext);
	if (context === undefined) {
		throw new Error('Cart Data is not available');
	}
	return context;
};
