import React, {
	createContext,
	useContext,
	useReducer,
	useMemo,
	Dispatch,
	ReactNode,
} from 'react';

type User = any | null;
interface State {
	user: User;
	isAuth: boolean;
	error: string | null;
	setCurrentUser: (user: User) => void;
	setError: () => void;
}

interface UserDataProviderProps {
	children: ReactNode;
}

const initialState: State = {
	user: null,
	isAuth: false,
	error: null,
	setCurrentUser: () => {},
	setError: () => {},
};
type Action =
	| { type: 'SET_CURRENT_USER'; user: User }
	| { type: 'SET_IS_USER_AUTH'; isAuth: boolean }
	| { type: 'SET_ERROR'; error: string | null }
	| { type: 'REMOVE_USER' };

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				...state,
				user: action.user,
				isAuth: true,
			};
		case 'REMOVE_USER':
			return {
				...state,
				user: null,
				isAuth: false,
				error: null,
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
	setCurrentUser: (user: User) => void;
	setError: (error: string | null) => void;
}

export const UserDataContext = createContext<UserContextDataValue | undefined>(
	undefined
);

export const UserDataProvider: React.FC<UserDataProviderProps> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const setCurrentUser = (user: User) => {
		dispatch({ type: 'SET_CURRENT_USER', user });
	};
	const setError = (error: string | null) => {
		dispatch({ type: 'SET_ERROR', error });
	};
	const values = useMemo(() => {
		return { state, dispatch, setCurrentUser, setError };
	}, [state, dispatch]);

	return (
		<UserDataContext.Provider value={values}>
			{children}
		</UserDataContext.Provider>
	);
};

// this Custom help to avoid importing many time in componet of useContext;
export const useUserDataContext = (): UserContextDataValue => {
	const context = useContext(UserDataContext);
	if (context === undefined) {
		throw new Error('User Data is not available');
	}
	return context;
};
