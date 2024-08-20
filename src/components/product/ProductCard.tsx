import React from 'react';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { ImageSrc, ImageButton, Image, ImageBackdrop } from './product.style';
import { AddCartButton } from '../button';
// import { useCartDataContext } from '../../context';
import { toast } from 'react-toastify';
import { ProductTypeValue, RootState } from '../../utils/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddItemToCart } from '../../utils/store/actions/cartAction';
const ProductCard = React.memo(({ product }: { product: ProductTypeValue }) => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state: RootState) => state.cart);

	/* ---- Context Cart Product Code  */
	// const { handleAddToCart, cartState } = useCartDataContext();
	// const { cartItems } = cartState;
	const existItem = cartItems.find(pro => pro.id === product.id);
	const handleClick = () => {
		if (!existItem) {
			// handleAddToCart(product);
			dispatch(asyncAddItemToCart(product));
			toast.success('Product Added to Cart', {
				position: 'bottom-center',
			});
		} else {
			toast.info('Product Already Added', {
				position: 'bottom-center',
			});
		}
	};

	return (
		<Grid
			item={true}
			xs={6}
			sm={4}
			md={2}
			key={product.id}
			sx={{
				mb: { xs: 6, md: 5 },
				ml: 0,
				p: 0,
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ImageButton
				// focusRipple
				sx={{
					width: '100%',
					height: {
						xs: '15vh',
						sm: 12,
						md: '20vh',
					},
				}}
			>
				<ImageSrc style={{ backgroundImage: `url(${product?.imageUrl})` }} />
				<ImageBackdrop className="MuiImageBackdrop-root" />
				<Image
					sx={{
						// bgcolor: 'green',
						opacity: 0.5,
						height: 'fit-content',
					}}
				>
					<Stack
						spacing={-1}
						sx={{
							display: 'flex',
							flexDirection: 'column-reverse',
							// bgcolor: 'blue',
							width: '100%',
							gap: { xs: 0, md: 0 },
						}}
					>
						<Typography
							variant="button"
							display="block"
							noWrap={true}
							sx={{
								textTransform: 'capitalize',
								color: theme.palette.text.secondary,
								fontWeight: '900',
								fontSize: { xs: 11, md: 12 },
								height: 'fit-content',
								textAlign: 'start',
								lineHeight: 1.1,
							}}
							gutterBottom
						>
							{product?.name}
						</Typography>
						<Typography
							variant="button"
							display="block"
							sx={{
								display: 'flex',
								alignItems: 'start',
								fontWeight: '900',
								color: theme.palette.text.primary,
								fontSize: { xs: 12, md: 12 },
							}}
							gutterBottom
						>
							${product?.price}
						</Typography>
					</Stack>
					<AddCartButton existItem={existItem} handleClick={handleClick} />
				</Image>
			</ImageButton>
		</Grid>
	);
});

export default ProductCard;
