import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useDispatch } from 'react-redux';
import {
	asyncDecrementItemInCart,
	asyncIncrementItemInCart,
	asyncRemoveItemFromCart,
} from '../../utils/store/actions/cartAction';
import { ProductContainerGrid } from './checkout.styles';

interface CartItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}
interface CartProductProps {
	product: CartItem;
}
const CheckOutProduct: React.FC<CartProductProps> = ({ product }) => {
	/* ----Context Api Code -------*/
	// const {
	// 	cartState,
	// 	handleRemoveItemFromCart,
	// 	handleIncrementItemQuantity,
	// 	handleDecrementItemQuantity,
	// } = useCartDataContext();
	// const { cartItemCount, cartItemsTotal, cartItems } = cartState;

	/* ----Redux Code  */
	const dispatch = useDispatch();

	const handleIncrementBtn = (product: CartItem) => {
		dispatch(asyncIncrementItemInCart(product?.id));
		// handleIncrementItemQuantity(product);
	};
	const handleDecrementBtn = (product: CartItem) => {
		dispatch(asyncDecrementItemInCart(product?.id));
		// handleDecrementItemQuantity(product);
	};
	const handleRemoveItemFromCartBtn = (product: CartItem) => {
		dispatch(asyncRemoveItemFromCart(product?.id));
		// handleRemoveItemFromCart(product);
	};

	return (
		<ProductContainerGrid
			container
			spacing={2}
			columnSpacing={2}
			key={product.id}
		>
			<Grid item xs={2}>
				<Box
					component="img"
					src={product.imageUrl}
					sx={{
						width: '100%',
						height: 'auto',
						borderRadius: 1,
					}}
				/>
			</Grid>
			<Grid item xs={3}>
				<Typography variant="body1" color="text.secondary">
					{product.name}
				</Typography>
			</Grid>

			<Grid item xs={1}>
				<IconButton onClick={() => handleDecrementBtn(product)}>
					<ArrowDropDownIcon />
				</IconButton>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="body1" color="text.primary" textAlign="center">
					{product.quantity}
				</Typography>
			</Grid>
			<Grid item xs={1}>
				<IconButton onClick={() => handleIncrementBtn(product)}>
					<ArrowDropUpIcon />
				</IconButton>
			</Grid>
			<Grid item xs={2}>
				<Typography variant="body1" color="text.primary">
					₹{product.price}
				</Typography>
			</Grid>
			<Grid item xs={2}>
				<IconButton
					onClick={() => handleRemoveItemFromCartBtn(product)}
					aria-label="remove"
					sx={{ color: 'error.main' }}
				>
					<DeleteIcon />
				</IconButton>
			</Grid>
		</ProductContainerGrid>
	);
};

export default CheckOutProduct;
