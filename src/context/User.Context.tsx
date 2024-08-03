import {
	createContext,
	useContext,
	useReducer,
	useMemo,
	Dispatch,
	ReactNode,
} from 'react';

interface State {
	user: any[];
	isAuth: boolean;
	error: string;
}

interface UserDataProviderProps {
	children: ReactNode;
}
type Action =
	| { type: 'SET_USER'; user: any[] }
	| { type: 'SET_IS_USER_AUTH'; isAuth: boolean }
	| { type: 'SET_ERROR'; error: string };

const initialState: State = {
	user: [],
	isAuth: false,
	error: '',
};
const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_IS_USER_AUTH':
			return {
				...state,
				isAuth: action.isAuth,
			};
		case 'SET_ERROR':
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};

// this is Context Value Type
interface UserContextDataValue {
	state: State;
	dispatch: Dispatch<Action>;
}

export const UserDataContext = createContext<UserContextDataValue | undefined>(
	undefined
);

export const UserDataProvider: React.FC<UserDataProviderProps> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const values = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);
	``;
	return (
		<UserDataContext.Provider value={values}>
			{children}
		</UserDataContext.Provider>
	);
};

// this Custom help to avoid importing many time in componet of useContext;
export const useUserData = () => {
	const context = useContext(UserDataContext);
	if (context === undefined) {
		throw new Error('User Data is not available');
	}
	return context;
};
