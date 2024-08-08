import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ClearIcon from '@mui/icons-material/Clear';
import { useCartDataContext } from '../../context';

interface Item {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}
const CartProduct = React.memo(({ product }: { product: Item }) => {
	// const theme = useTheme();
	const {
		handleRemoveItemFromCart,
		handleIncrementItemQuantity,
		handleDecrementItemQuantity,
	} = useCartDataContext();

	return (
		<Card
			sx={{ display: 'flex', height: 80, width: '100%', bgcolor: 'secondary' }}
		>
			<CardMedia
				component="img"
				sx={{ width: 100 }}
				image={product?.imageUrl}
				alt="Live from space album cover"
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '0 0 auto', height: '100%', px: 2, py: 0.2 }}>
					<Typography component="div" variant="h6" fontSize={16}>
						Live From Space
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
						fontSize={12}
					>
						₹ {product?.price}
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
						fontSize={12}
					>
						Qty:&nbsp;{product?.quantity}
					</Typography>
				</CardContent>
			</Box>
			<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
				<IconButton onClick={() => handleIncrementItemQuantity(product)}>
					<ArrowDropUpIcon />
				</IconButton>
				<IconButton onClick={() => handleDecrementItemQuantity(product)}>
					<ArrowDropDownIcon />
				</IconButton>
				<IconButton onClick={() => handleRemoveItemFromCart(product)}>
					<ClearIcon sx={{ height: 30, width: 30 }} />
				</IconButton>
			</Box>
		</Card>
	);
});

export default CartProduct;
