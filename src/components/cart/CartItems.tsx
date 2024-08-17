import React from 'react';
import Box from '@mui/material/Box';
import { ProductsContainer } from '../../containers';
import BigHeading from '../headings/BigHeading';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { CustomNavButton } from '../button';
import { Link } from 'react-router-dom';
import { CartProduct } from '../product';

interface CartItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}
interface CartItemsProps {
	cartItems: CartItem[];
	cartItemCount: number;
	cartItemsTotal: number;
}
const CartItems: React.FC<CartItemsProps> = ({
	cartItems,
	cartItemCount,
	cartItemsTotal,
}) => {
	return (
		<>
			<ProductsContainer
				sx={{
					// bgcolor: 'skyblue',
					boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
					height: '100%',
					pb: 2,
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						width: { xs: 230, md: 400 },
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						// bgcolor:'gray'
						gap: 1,
					}}
					role="presentation"
				>
					<BigHeading
						sx={{
							textAlign: 'center',
							bgcolor: 'background.nav',
							color: 'black',
							borderRadius: 2,
							py: { xs: 2, sm: 4, md: 2 },
						}}
					>
						Cart Items : {cartItemCount}
					</BigHeading>
					{cartItems?.map(product => (
						<CartProduct key={product.id} product={product} />
					))}
				</Box>
				<Link to="/shop/cart-checkout">
					<CustomNavButton
						sx={{
							fontSize: { xs: 12, md: 20 },
							width: '100%',
							bgcolor: 'rgba(0, 128, 0, 0.5)',
							'&:hover': { bgcolor: 'rgba(0, 128, 0, 0.7)' },
						}}
					>
						{' '}
						Go To Checkout &nbsp;
						<ShoppingCartCheckoutIcon fontSize="medium" /> &nbsp;₹&nbsp;
						{cartItemsTotal}
					</CustomNavButton>
				</Link>
			</ProductsContainer>
		</>
	);
};

export default CartItems;

// {
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
/* <List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List> */
// }
