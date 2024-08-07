// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserDataProvider, ProductsDataContextProvider, ThemeContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<UserDataProvider>
		<ProductsDataContextProvider>
			<ThemeContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeContextProvider>
		</ProductsDataContextProvider>
	</UserDataProvider>
	// </React.StrictMode>
);
