import { SxProps, Theme } from '@mui/material';

export interface CommonProp {
	children: React.ReactNode;
	sx?: SxProps<Theme>;
}

export interface ProductTypeValue {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
export interface ProductTypeParent {
	title: string;
	items: ProductTypeValue[];
}
export interface ProductContextValue {
	allProducts: ProductTypeParent[];
	loading: boolean;
	error: string | null;
}

/* ----- Cart Item Prop ------- */
export interface CartItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}
export interface CartIconProps {
	toggleCart: (
		type: 'cart' | 'menu',
		open: boolean
	) => (event: React.KeyboardEvent | React.MouseEvent) => void;
	cartItemCount: number;
}

export interface MenuIconProps {
	toggleMenu: (
		type: 'cart' | 'menu',
		open: boolean
	) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

/* -------- Root STate Props ----- */
type User = object | null;
export interface UserValue {
	user: User;
	isAuth: boolean;
	error: string | null;
}
export interface CartState {
	cartItemCount: number;
	cartItemsTotal: number;
	cartItems: CartItem[];
	isCartOpen: boolean;
	isMenuOpen: boolean;
}
export type RootState = {
	user: UserValue;
	cart: CartState;
	products: ProductContextValue;
};
