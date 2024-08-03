import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './theme/ThemeContextProvider.tsx';
// import { AppThemeProvider } from './context/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeContextProvider>
	</React.StrictMode>
);
