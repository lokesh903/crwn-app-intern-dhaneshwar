import React from 'react';
import Box from '@mui/material/Box';
import { ProductsContainer } from '../../containers';
import BigHeading from '../headings/BigHeading';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { CustomNavButton } from '../button';
import { Link } from 'react-router-dom';
import { CartProduct } from '../product';
import SubHeading from '../headings/SubHeading';

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
					pb: 2,
					minHeight: '100vh',
					height: 'auto',
					flexDirection: 'column',
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
					{cartItemCount > 0 ? (
						cartItems?.map(product => (
							<CartProduct key={product.id} product={product} />
						))
					) : (
						<SubHeading>No Products in Cart !!</SubHeading>
					)}
				</Box>
				<CustomNavButton
					sx={{
						fontSize: { xs: 12, md: 20 },
						width: '100%',
						bgcolor: 'rgba(0, 128, 0, 0.5)',
						'&:hover': { bgcolor: 'rgba(0, 128, 0, 0.7)' },
					}}
					disabled={cartItemCount === 0}
				>
					<Link to="/shop/cart-checkout">
						{' '}
						Go To Checkout &nbsp;
						<ShoppingCartCheckoutIcon fontSize="medium" /> &nbsp;₹&nbsp;
						{cartItemsTotal}
					</Link>
				</CustomNavButton>
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
