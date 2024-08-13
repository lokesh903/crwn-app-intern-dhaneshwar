import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { useThemeContext } from './context/theme/ThemeContextProvider';
import {
	AllProducts,
	AuthenticationPage,
	CartCheckoutPage,
	CategoryPreview,
	HomePage,
} from './pages';
import { MainLayout, ShopLayout } from './layouts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentCompletion from './components/payment-form/PaymentCompletion';

const App: React.FC = () => {
	const { theme } = useThemeContext();
	return (
		<>
			<ToastContainer />
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/shop/*" element={<ShopLayout />}>
							<Route path="all-products" element={<AllProducts />} />
							<Route path=":categoryName" element={<CategoryPreview />} />
						</Route>
						<Route path="/shop/cart-checkout" element={<CartCheckoutPage />} />
						<Route path="/authentication" element={<AuthenticationPage />} />
						<Route path="/payment-completion" element={<PaymentCompletion />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</>
	);
};

export default App;
