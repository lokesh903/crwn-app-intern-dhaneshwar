import { ThunkAction } from 'redux-thunk';
import { asyncCurrentLoggedInUser } from '../../config/FirebaseAuthActions';
import { RootState } from '../../types/types';
import { asyncAddUser, asyncFetchUser, asyncSetError } from '../actions/action';
export enum UserActionTypes {
	FETCH_USER = 'FETCH_USER',
	ADD_USER = 'ADD_USER',
	REMOVE_USER = 'REMOVE_USER',
	SET_USER_ERROR = 'SET_USER_ERROR',
}
type User = object | null;
export interface UserValue {
	loading: boolean;
	user: User;
	isAuth: boolean;
	error: string | null;
}

const initialState: UserValue = {
	loading: false,
	user: null,
	isAuth: false,
	error: null,
};

type Action =
	| { type: UserActionTypes.FETCH_USER }
	| { type: UserActionTypes.ADD_USER; payload: User }
	| { type: UserActionTypes.REMOVE_USER }
	| { type: UserActionTypes.SET_USER_ERROR; payload: string | null };

const userReducer = (state = initialState, action: Action): UserValue => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER:
			return {
				...state,
				loading: true,
			};
		case UserActionTypes.ADD_USER:
			return {
				...state,
				loading: false,
				user: action.payload,
				isAuth: true,
			};
		case UserActionTypes.REMOVE_USER:
			return {
				...state,
				user: null,
				isAuth: false,
			};
		case UserActionTypes.SET_USER_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export default userReducer;

export const fetchCurrentUser =
	(): ThunkAction<void, RootState, unknown, any> => async dispatch => {
		dispatch(asyncFetchUser());
		try {
			const user = await asyncCurrentLoggedInUser();
			// console.log(user);
			if (user) {
				dispatch(asyncAddUser({ user }));
			}
		} catch (error) {
			const typedError = error as Error;
			dispatch(asyncSetError(typedError.message));
			console.log(typedError);
		}
	};
