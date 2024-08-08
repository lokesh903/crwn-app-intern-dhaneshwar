import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartDataContext } from '../../context';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
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
	const { handleAddToCart, cartState } = useCartDataContext();
	const { cartItems } = cartState;

	const existItem = cartItems.find(pro => pro.id === product.id);

	const handleClick = () => {
		if (!existItem) {
			handleAddToCart(product);
			toast.success('Product Added to Cart', {
				position: 'bottom-right',
			});
		} else {
			toast.info('Product Already Added', {
				position: 'bottom-right',
			});
		}
	};
		
	return (
		<Button
			onClick={() => handleClick()}
			sx={{
				color: existItem ? 'text.disabled' : 'primary.main',
				cursor: existItem ? 'not-allowed' : 'pointer',
				'&:hover': {
					color: !existItem ? 'text.hover' : 'text.disabled',
					bgcolor: !existItem ? 'text.secondary' : 'inherit',
					borderRadius: 2,
					textAlign: 'end',
				},
				p: 0.4,
			}}
			disabled={!!existItem}
		>
			{existItem ? (
				<ShoppingBasketIcon />
			) : (
				<AddShoppingCartIcon fontSize="medium" />
			)}
		</Button>
	);
};

export default AddCartButton;
