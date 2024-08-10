import React, {
	createContext,
	useContext,
	useReducer,
	useMemo,
	Dispatch,
	ReactNode,
	useEffect,
} from 'react';
interface SideBarProviderProp {
	children: ReactNode;
}
interface SideBarState {
	isCartOpen: boolean;
	isMenuOpen: boolean;
}
const initialState: SideBarState = {
	isCartOpen: false,
	isMenuOpen: false,
};
interface SideDrawerContextDataValue {
	sideDrawerState: SideBarState;
	dispatch: Dispatch<Action>;
	toggleDrawer: (
		type: 'cart' | 'menu',
		open: boolean
	) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
type Action =
	| { type: 'TOGGLE_CART'; payload: boolean }
	| { type: 'TOGGLE_MENU'; payload: boolean };

const reducer = (
	sideDrawerState: SideBarState,
	action: Action
): SideBarState => {
	switch (action.type) {
		case 'TOGGLE_CART':
			return {
				...sideDrawerState,
				isCartOpen: action.payload,
			};
		case 'TOGGLE_MENU':
			return {
				...sideDrawerState,
				isMenuOpen: action.payload,
			};
		default:
			return sideDrawerState;
	}
};

export const SideDrawerDataContext = createContext<
	SideDrawerContextDataValue | undefined
>(undefined);

export const SideDrawerDataProvider: React.FC<SideBarProviderProp> = ({
	children,
}) => {
	const [sideDrawerState, dispatch] = useReducer(
		reducer,
		initialState,
		initial => {
			const storedState = localStorage.getItem('sideDrawerState');
			return storedState ? JSON.parse(storedState) : initial;
		}
	);
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

	useEffect(() => {
		localStorage.setItem('sideDrawerState', JSON.stringify(sideDrawerState));
	}, [sideDrawerState]);

	const values = useMemo(() => {
		return {
			sideDrawerState,
			dispatch,
			toggleDrawer,
		};
	}, [sideDrawerState, dispatch]);

	return (
		<SideDrawerDataContext.Provider value={values}>
			{children}
		</SideDrawerDataContext.Provider>
	);
};

// this Custom help to avoid importing many time in componet of useContext;
export const useSideDrawerContext = (): SideDrawerContextDataValue => {
	const context = useContext(SideDrawerDataContext);
	if (context === undefined) {
		throw new Error('Cart Data is not available');
	}
	return context;
};
