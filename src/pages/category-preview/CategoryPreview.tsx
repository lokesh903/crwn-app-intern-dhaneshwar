import React from 'react';
import { Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link, useParams } from 'react-router-dom';
import { experimentalStyled as styled, useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid } from '@mui/material';
import { SHOP_DATA_PRODUCTS } from '../../utils/store/ClothingData';
interface Item {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}

interface Category {
	title: string;
	items: Item[];
}

const SHOP_DATA: Category[] = SHOP_DATA_PRODUCTS;
const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	height: 200,
	[theme.breakpoints.down('sm')]: {
		width: '100% !important', // Overrides inline-style
		height: 100,
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
	},
}));

const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: -45,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '2px 4px',
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.3,
	transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}));

const ProductCard = React.memo(({ product }: { product: Item }) => {
	const theme = useTheme();
	return (
		<Grid item={true} xs={6} sm={4} md={3} key={product.id}>
			<ImageButton
				focusRipple
				style={{
					width: '100%',
					height: '25vh',
				}}
				sx={{ mt: 2 }}
			>
				<ImageSrc style={{ backgroundImage: `url(${product?.imageUrl})` }} />
				<ImageBackdrop className="MuiImageBackdrop-root" />
				<Image
					sx={{
						// bgcolor: 'green',
						opacity: 0.5,
					}}
				>
					<Stack spacing={-1}>
						<Typography
							variant="button"
							display="block"
							sx={{
								textTransform: 'capitalize',
								color: theme.palette.text.secondary,
								fontWeight: '900',
								fontSize: { xs: 14, md: 12 },
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
							},
							p: 0.4,
						}}
					>
						<AddShoppingCartIcon />
					</Typography>
				</Image>
			</ImageButton>
		</Grid>
	);
});
const CategoryPreview: React.FC = () => {
	const { categoryName } = useParams<{ categoryName: string }>();
	const filteredCategoryProducts = SHOP_DATA.find(
		category => category.title.toLowerCase() === categoryName?.toLowerCase()
	);
	if (!filteredCategoryProducts) {
		return <div>Category not found</div>;
	}
	const { items } = filteredCategoryProducts;

	return (
		<>
			<Container sx={{ pt: 6 }}>
				<div>CategoryPreview: {categoryName}</div>
				<Grid
					container
					spacing={{ xs: 3, md: 6 }}
					columns={{ xs: 12, sm: 8, md: 12 }}
				>
					{items.map((product: Item) => (
						<ProductCard key={product.id} product={product} />
					))}
				</Grid>
			</Container>
		</>
	);
};

export default CategoryPreview;
