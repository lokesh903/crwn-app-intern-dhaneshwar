import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomNavButton } from '../button';
import { Link } from 'react-router-dom';
// import { useCartDataContext } from '../../context';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SubHeading from '../headings/SubHeading';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncDecrementItemInCart,
	asyncIncrementItemInCart,
	asyncRemoveItemFromCart,
} from '../../utils/store/actions/cartAction';
import { RootState } from '../../utils/types/types';
import CheckoutForm from '../payment-form/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { stripePromise } from '../../utils/stripe/stripe.utils';
import { loadStripe } from '@stripe/stripe-js';

// export const stripePromise = loadStripe(
// 	import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
// );

interface CartItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}

// interface CartItemsProps {
// 	cartItems: CartItem[];
// 	cartItemCount: number;
// 	cartItemsTotal: number;
// }
const stripePromise = loadStripe(
	import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
);
const CartCheckout: React.FC = () => {
	const [checkoutForm, setCheckoutForm] = useState(false);
	const handleCheckoutForm = () => {
		setCheckoutForm(prev => !prev);
	};
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
	const { cartItems, cartItemsTotal, cartItemCount } = useSelector(
		(state: RootState) => state.cart
	);
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
		<>
			<Box
				sx={{
					padding: 2,
					boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
					backgroundColor: 'background.paper',
					borderRadius: 2,
					width: '100%',
					minHeight: '70vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					variant="h6"
					sx={{
						textAlign: 'center',
						marginBottom: 2,
						color: 'text.primary',
					}}
				>
					Cart Items: {cartItemCount}
				</Typography>
				{cartItems.length >= 1 ? (
					cartItems?.map(product => (
						<Grid
							container
							spacing={2}
							columnSpacing={1}
							key={product.id}
							alignItems="center"
							sx={{
								borderBottom: `1px solid`,
								borderColor: 'divider',
								paddingY: 1,
							}}
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
								<Typography
									variant="body1"
									color="text.primary"
									textAlign="center"
								>
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
						</Grid>
					))
				) : (
					<SubHeading>No Products</SubHeading>
				)}

				{/* <Link to="/shop/cart-checkout"> */}
				<CustomNavButton
					onClick={handleCheckoutForm}
					sx={{
						width: '100%',
						bgcolor: 'success.light',
						marginTop: 2,
						'&:hover': { bgcolor: 'success.dark' },
					}}
				>
					Place You Order &nbsp;
					<PointOfSaleIcon fontSize="small" /> &nbsp;₹&nbsp;
					{cartItemsTotal}
				</CustomNavButton>
				{/* </Link> */}
			</Box>
			{checkoutForm && (
				<Box
					sx={{
						bgcolor: 'background.nav',
						color: 'white',
						width: '60%',
						px: 3,
						py: 4,
					}}
				>
					<Elements stripe={stripePromise}>
						{' '}
						<CheckoutForm setCheckoutForm={setCheckoutForm} />
					</Elements>
				</Box>
			)}
		</>
	);
};

export default CartCheckout;
