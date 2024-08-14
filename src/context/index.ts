/* ------------ THEME CONTEXT--------- */
import {
	ThemeContextProvider,
	useThemeContext,
} from './theme/ThemeContextProvider';

/* ------------ USER CONTEXT--------- */
import { UserDataProvider, useUserDataContext } from './User.Context';

/* ------------ PRODUCT CONTEXT--------- */
import {
	ProductsDataContextProvider,
	useProductContext,
} from './Product.Context';

/* ------------ CART CONTEXT--------- */
// import { CartDataProvider, useCartDataContext } from './Cart.Context';


/* ------------ Sidebar CONTEXT--------- */
import { SideDrawerDataContext,SideDrawerDataProvider } from './SideBarDrawar.context';



export {
	ThemeContextProvider,
	useThemeContext,
	UserDataProvider,
	useUserDataContext,
	ProductsDataContextProvider,
	useProductContext,
	// CartDataProvider,
	// useCartDataContext,
	SideDrawerDataProvider,
	SideDrawerDataContext,
};
