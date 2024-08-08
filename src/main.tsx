// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {
	UserDataProvider,
	ProductsDataContextProvider,
	ThemeContextProvider,
	CartDataProvider,
} from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<UserDataProvider>
		<ProductsDataContextProvider>
			<CartDataProvider>
				<ThemeContextProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeContextProvider>
			</CartDataProvider>
		</ProductsDataContextProvider>
	</UserDataProvider>
	// </React.StrictMode>
);
