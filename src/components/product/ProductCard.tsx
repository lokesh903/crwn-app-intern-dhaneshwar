import React from 'react';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid } from '@mui/material';
import { ImageSrc, ImageButton, Image, ImageBackdrop } from './product.style';

interface Item {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
const ProductCard = React.memo(({ product }: { product: Item }) => {
	const theme = useTheme();
	// console.log(product);

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
				height: 'fit-content',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ImageButton
				focusRipple
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

					<Typography
						sx={{
							color: 'primary.main',
							'&:hover': {
								color: 'text.hover',
								bgcolor: 'text.secondary',
								borderRadius: 2,
								// width: '100%',
								textAlign: 'end',
							},
							p: 0.4,
						}}
					>
						<AddShoppingCartIcon fontSize="medium" />
					</Typography>
				</Image>
			</ImageButton>
		</Grid>
	);
});

export default ProductCard;
