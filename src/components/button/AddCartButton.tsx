import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { SxProps, Theme } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { ProductTypeValue } from '../../utils/types/types';

interface AddCartButtonProps {
	sx?: SxProps<Theme>;
	handleClick: () => void;
	existItem?: ProductTypeValue;
}
const AddCartButton: React.FC<AddCartButtonProps> = ({
	sx,
	handleClick,
	existItem,
	...props
}) => {
	return (
		<>
			<IconButton
				onClick={handleClick}
				sx={[
					{
						color: existItem ? 'text.disabled' : 'primary.main',
						cursor: existItem ? 'not-allowed' : 'pointer',
						'&:hover': {
							color: !existItem ? 'text.hover' : 'text.disabled',
							bgcolor: !existItem ? 'text.secondary' : 'inherit',
							borderRadius: 2,
							textAlign: 'end',
						},
						p: 0.4,
					},
					...(Array.isArray(sx) ? sx : [sx]),
				]}
				disabled={!!existItem}
				color="primary"
				aria-label="add to shopping cart"
				{...props}
			>
				{existItem ? (
					<ShoppingBasketIcon />
				) : (
					<AddShoppingCartIcon fontSize="medium" />
				)}
			</IconButton>
		</>
	);
};

export default AddCartButton;
