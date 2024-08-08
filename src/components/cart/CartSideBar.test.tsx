import React from 'react';
import Drawer from '@mui/material/Drawer';


interface CartSidebarProps {
	isOpen: boolean;
	toggleDrawer: (
		type: 'cart' | 'menu',
		open: boolean
	) => (event: React.KeyboardEvent | React.MouseEvent) => void;
	type: 'cart' | 'menu';
	children: React.ReactNode;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
	isOpen,
	toggleDrawer,
	type,
	children,
}) => {
	return (
		<Drawer
			anchor="right"
			open={isOpen}
			onClose={toggleDrawer(type, false)}
		>
			{children}
		</Drawer>
	);
};
