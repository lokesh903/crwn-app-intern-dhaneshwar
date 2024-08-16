import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {
	// UserDataProvider,
	// ProductsDataContextProvider,
	ThemeContextProvider,
	// CartDataProvider,
} from './context';
import { Provider } from 'react-redux';
import configureStore from './utils/store/store.ts';
import { SideDrawerDataProvider } from './context/SideBarDrawar.context.tsx';
import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = configureStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<SideDrawerDataProvider>
				{/* <ProductsDataContextProvider> */}
				{/* <UserDataProvider> */}	
				{/* <CartDataProvider> */}
				<ThemeContextProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeContextProvider>
				{/* </CartDataProvider> */}
				{/* </UserDataProvider> */}
				{/* </ProductsDataContextProvider> */}
			</SideDrawerDataProvider>
		</PersistGate>
	</Provider>
	// </React.StrictMode>
);
