import React from 'react';
import { PageContainer, ProductsContainer } from '../../containers';
import { BigHeading } from '../../components';
// import { Grid } from '@mui/material';
// import { useCartDataContext } from '../../context';
import CartChekout from '../../components/cart/CartCheckout';

const CartCheckoutPage: React.FC = () => {
	// const { cartState } = useCartDataContext();
	// const { cartItemCount, cartItemsTotal, cartItems } = cartState;

	return (
		<>
			<PageContainer sx={{}}>
				<BigHeading>Checkout Page</BigHeading>
				<ProductsContainer sx={{ pb: 2 }}>
					{/* <Grid
						container
						spacing={{ xs: 3, md: 3 }}
						columns={{ xs: 12, sm: 8, md: 12 }}
					> */}
					<CartChekout />

					{/* <CartItems
						cartItems={cartItems}
						cartItemCount={cartItemCount}
						cartItemsTotal={cartItemsTotal}
						/> */}
					{/* </Grid> */}
				</ProductsContainer>
			</PageContainer>
		</>
	);
};

export default CartCheckoutPage;
