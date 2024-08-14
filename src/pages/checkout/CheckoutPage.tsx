import React from 'react';
import { PageContainer, ProductsContainer } from '../../containers';
import { BigHeading } from '../../components';
// import { Grid } from '@mui/material';
// import { useCartDataContext } from '../../context';
import CartChekout from '../../components/cart-checkout/CartCheckout';

const CartCheckoutPage: React.FC = () => {
	// const { cartState } = useCartDataContext();
	// const { cartItemCount, cartItemsTotal, cartItems } = cartState;

	return (
		<>
			<PageContainer sx={{}}>
				<BigHeading>Checkout Page</BigHeading>
				<ProductsContainer sx={{ pb: 2 }}>
					<CartChekout />
				</ProductsContainer>
			</PageContainer>
		</>
	);
};

export default CartCheckoutPage;
