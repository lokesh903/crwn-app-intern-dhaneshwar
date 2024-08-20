import { UserActionTypes } from '../reducers/userReducer';

export const asyncFetchUser = () => ({
	type: UserActionTypes.FETCH_USER,
});

const asyncAddUser = (value: object) => ({
	type: UserActionTypes.ADD_USER,
	payload: value,
});

const asyncRemoveUser = () => ({
	type: UserActionTypes.REMOVE_USER,
});

const asyncSetError = (value: string | null) => ({
	type: UserActionTypes.SET_USER_ERROR,
	payload: value,
});

export { asyncAddUser, asyncRemoveUser, asyncSetError };
