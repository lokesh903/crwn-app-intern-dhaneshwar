import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { useThemeContext } from './context/theme/ThemeContextProvider';
import { AllProducts, AuthenticationPage, HomePage } from './pages';
import { MainLayout, ShopLayout } from './layouts';

const App: React.FC = () => {
	const { theme } = useThemeContext();
	return (
		<>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/shop/*" element={<ShopLayout />}>
							<Route path="all-products" element={<AllProducts />} />
							<Route path=":categoryName" element={<AllProducts />} />
						</Route>
						<Route path="/authentication" element={<AuthenticationPage />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</>
	);
};

export default App;
