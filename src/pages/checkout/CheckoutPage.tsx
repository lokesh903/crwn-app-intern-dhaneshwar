import React, { useEffect,  } from 'react';
import { PageContainer,  } from '../../containers';
import { BigHeading, CartItems } from '../../components';
import { Grid } from '@mui/material';
import { useCartDataContext } from '../../context';

const CartCheckoutPage: React.FC = () => {
	const { cartState } = useCartDataContext();
	const { cartItemCount, cartItemsTotal, cartItems } = cartState;
	useEffect(() => {}, []);

	return (
		<>
			<PageContainer sx={{}}>
				<BigHeading>Checkout</BigHeading>
				<Grid
					container
					spacing={{ xs: 3, md: 3 }}
					columns={{ xs: 12, sm: 8, md: 12 }}
				>

					<CartItems
						cartItems={cartItems}
						cartItemCount={cartItemCount}
						cartItemsTotal={cartItemsTotal}
					/>
				</Grid>
			</PageContainer>
		</>
	);
};

export default CartCheckoutPage;
