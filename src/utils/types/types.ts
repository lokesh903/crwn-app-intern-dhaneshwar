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