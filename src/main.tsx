// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './theme/ThemeContextProvider.tsx';
import { UserDataProvider } from './context/User.Context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
		<UserDataProvider>
			<ThemeContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeContextProvider>
		</UserDataProvider>
	// </React.StrictMode>
);
