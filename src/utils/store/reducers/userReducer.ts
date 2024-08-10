export enum UserActionTypes {
	ADD_USER = 'ADD_USER',
	REMOVE_USER = 'REMOVE_USER',
	SET_USER = 'SET_USER',
}

type User = object | null;
export interface UserValue {
	user: User;
	isAuth: boolean;
	error: string | null;
}

const initialState: UserValue = {
	user: null,
	isAuth: false,
	error: null,
};

type Action =
	| { type: UserActionTypes.ADD_USER; payload: User }
	| { type: UserActionTypes.REMOVE_USER }
	| { type: UserActionTypes.SET_USER; payload: string | null };

const userReducer = (state = initialState, action: Action): UserValue => {
	switch (action.type) {
		case UserActionTypes.ADD_USER:
			return {
				...state,
				user: action.payload,
				isAuth: true,
			};
		case UserActionTypes.REMOVE_USER:
			return {
				...state,
				user: null,
				isAuth: false,
			};
		case UserActionTypes.SET_USER:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
export default userReducer;
