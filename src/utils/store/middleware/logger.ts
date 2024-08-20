import { Middleware } from 'redux';
import { RootState } from '../../types/types';

export const func: Middleware<{}, RootState> =
	({ dispatch, getState }) =>
	next =>
	action => {
		if (typeof action === 'function') {
			// console.log('Thunk action:', action);
			return (action as Function)(dispatch, getState);
		} else {
			// console.log('Action:', action);
			return next(action);
		}
	};

