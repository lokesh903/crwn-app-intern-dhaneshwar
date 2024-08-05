import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import MainLayout from './MainLayout';
import { useThemeContext } from './theme/ThemeContextProvider';
import { AllProducts, AuthenticationPage, CategoryPreview, HomePage } from './pages';


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
						<Route
							path="/authentication"
							element={<AuthenticationPage />}
						/>
					</Route>
				</Routes>
			</ThemeProvider>
		</>
	);
};

export default App;
