import React from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import { Button, SxProps, Theme } from '@mui/material';

interface CommonProp {
	sx?: SxProps<Theme>;
	children?: React.ReactNode;
}
interface CartIconProps extends CommonProp {
	toggleCart: (
		type: 'cart' | 'menu',
		open: boolean
	) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
const CartIconButton: React.FC<CartIconProps> = ({
	toggleCart,
	sx,
	children,
	...props
}) => {
	return (
		<Button
			sx={[
				{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					bgcolor: 'background.default',
					color: 'text.primary',
					borderColor: 'text.primary',
					border: '1px solid',
					borderRadius: 25,
					px: 2,
					py: 0.8,
					ml: { xs: 0, sm: 0, md: 1 },
					mr: { xs: 0, sm: 0, md: 1 },
					whiteSpace: 'nowrap',
					width: '100%',
					'&:hover': {
						bgcolor: 'text.primary',
						color: 'text.hover',
					},
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			variant="contained"
			startIcon={<ShoppingBagTwoToneIcon fontSize="large" />}
			{...props}
			onClick={toggleCart('cart', true)}
		>
			{children}
		</Button>
	);
};

export default CartIconButton;
