import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Portal } from '@mui/base/Portal';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { RootState } from '../../utils/types/types';
import { Elements } from '@stripe/react-stripe-js';
import { CustomNavButton } from '../button';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SubHeading from '../headings/SubHeading';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import {
	CheckOutContainerBox,
	orderBtnStl,
	paymentStyle,
	productStl,
} from './checkout.styles';
import { CheckOutPaymentForm, CheckOutProduct } from './index';
import BigHeading from '../headings/BigHeading';

const stripePromise = loadStripe(
	import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
);
const CartCheckout: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [clientSecret, setClientSecret] = React.useState(null);
	const handleClick = () => {
		setOpen(prev => !prev);
	};
	const handleClickAway = () => {
		setOpen(false);
	};
	const { cartItems, cartItemsTotal, cartItemCount } = useSelector(
		(state: RootState) => state.cart
	);

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<CheckOutContainerBox>
				<Box sx={{ ...productStl }}>
					<BigHeading>Cart Items: {cartItemCount}</BigHeading>
					{cartItems.length >= 1 ? (
						cartItems?.map(product => {
							return <CheckOutProduct key={product?.id} product={product} />;
						})
					) : (
						<SubHeading>No Products</SubHeading>
					)}
					{open ? (
						<Portal>
							<Box sx={paymentStyle}>
								<Elements stripe={stripePromise}>
									<CheckOutPaymentForm handleClick={handleClick} />
								</Elements>
							</Box>
						</Portal>
					) : null}
				</Box>
				<CustomNavButton
					disabled={cartItemCount > 0 ? false : true}
					onClick={() => {
						setOpen(true);
					}}
					sx={{
						...orderBtnStl,
						mb: 2,
					}}
				>
					Place You Order &nbsp;
					<PointOfSaleIcon fontSize="small" /> &nbsp;₹&nbsp;
					{cartItemsTotal}
				</CustomNavButton>
			</CheckOutContainerBox>
		</ClickAwayListener>
	);
};

export default CartCheckout;
