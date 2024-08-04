import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import MainLayout from './MainLayout';
import { ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import AllProducts from './pages/products/AllProducts';
import CategoryPreview from './pages/category-preview/CategoryPreview';
import AuthenticationPage from './pages/authentication/AuthenticationPage';
import { AuthenticationForm } from './components/auth';

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
						<Route path="/auth" element={<AuthenticationPage />} />
						<Route path="/authe" element={<AuthenticationForm />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</>
	);
};

export default App;
