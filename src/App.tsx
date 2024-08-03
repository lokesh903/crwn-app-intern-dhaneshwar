import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import MainLayout from './MainLayout';
import { ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import AllProducts from './pages/products/AllProducts';
import CategoryPreview from './pages/category-preview/CategoryPreview';

const App: React.FC = () => {
	const { theme } = useThemeContext();
	return (
		<>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/shop">
							<Route index element={<AllProducts />} />
							<Route
								path="/shop/category/:categoryName"
								element={<CategoryPreview />}
							/>
						</Route>

						<Route path="auth"></Route>
					</Route>
				</Routes>
			</ThemeProvider>
		</>
	);
};

export default App;
