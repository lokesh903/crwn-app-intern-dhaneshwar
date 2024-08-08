import React from 'react';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartDataContext } from '../../context';
interface Item {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
interface AddCartButtonProps {
	product: Item;
}
const AddCartButton: React.FC<AddCartButtonProps> = ({ product }) => {
	const { handleAddToCart } = useCartDataContext();
	return (
		<Typography
			variant="button"
			onClick={() => handleAddToCart(product)}
			sx={{
				color: 'primary.main',
				'&:hover': {
					color: 'text.hover',
					bgcolor: 'text.secondary',
					borderRadius: 2,
					// width: '100%',
					textAlign: 'end',
				},
				p: 0.4,
			}}
		>
			<AddShoppingCartIcon fontSize="medium" />
		</Typography>
	);
};

export default AddCartButton;
