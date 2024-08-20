import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';
import { func } from './middleware/logger';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'cart', 'products'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

(window as any).global = window;

export default () => {
	const middleware = [thunk, func];

	const store = createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(...middleware))
	);
	const persistor = persistStore(store);

	return { store, persistor };
};
