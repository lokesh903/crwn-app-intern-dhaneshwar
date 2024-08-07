// import React, {
//     createContext,
//     useContext,
//     useReducer,
//     useMemo,
//     Dispatch,
//     ReactNode,
// } from 'react';

// interface CartState {
//     cartItemCount: number;
//     cartItemsTotal: number;
//     cartItems: object;
//     addItemToCart: () => void;
//     removeItemFromCart: () => void;
//     clearCart: () => void;
// }

// interface CartProviderProps {
//     children: ReactNode;
// }
// interface CartContextDataValue {
//     state: CartState;
//     dispatch: Dispatch<Action>;
// }

// const initialState: CartState = {
//     cartItemCount: 0,
//     cartItemsTotal: 0,
//     cartItems: [],
//     addItemToCart: () => {},
//     removeItemFromCart: () => {},
//     clearCart: () => {},
// };
// type Action = { type: 'ADD_ITEM_CART'; cartItemCount:  };

// const reducer = (state: CartState, action: Action) => {
//     switch (action.type) {
//         case 'ADD_ITEM_CART':
//             return {
//                 ...state,
//                 user: action.user,
//                 isAuth: true,
//             };

//         default:
//             return state;
//     }
// };

// export const CartDataContext = createContext<CartContextDataValue | undefined>(
//     undefined
// );

// export const UserDataProvider: React.FC<CartProviderProps> = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const setCurrentUser = (user: User) => {
//         dispatch({ type: 'SET_CURRENT_USER', user });
//     };

//     const values = useMemo(() => {
//         return { state, dispatch, setCurrentUser };
//     }, [state, dispatch]);

//     return (
//         <CartDataContext.Provider value={values}>
//             {children}
//         </CartDataContext.Provider>
//     );
// };

// // this Custom help to avoid importing many time in componet of useContext;
// export const useCartDataContext = (): CartContextDataValue => {
//     const context = useContext(CartDataContext);
//     if (context === undefined) {
//         throw new Error('Cart Data is not available');
//     }
//     return context;
// };
