import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'cart', 'products'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export default () => {
	let store = createStore(persistedReducer, composeWithDevTools());
	let persistor = persistStore(store);
	return { store, persistor };
};
