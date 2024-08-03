import React, { useMemo } from 'react';
import { Container, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Link, useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import { experimentalStyled as styled, useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Grid } from '@mui/material';
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

const SHOP_DATA: Category[] = [
	{
		title: 'Hats',
		items: [
			{
				id: 1,
				name: 'Brown Brim',
				imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
				price: 25,
			},
			{
				id: 2,
				name: 'Blue Beanie',
				imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
				price: 18,
			},
			{
				id: 3,
				name: 'Brown Cowboy',
				imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
				price: 35,
			},
			{
				id: 4,
				name: 'Grey Brim',
				imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
				price: 25,
			},
			{
				id: 5,
				name: 'Green Beanie',
				imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
				price: 18,
			},
			{
				id: 6,
				name: 'Palm Tree Cap',
				imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
				price: 14,
			},
			{
				id: 7,
				name: 'Red Beanie',
				imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
				price: 18,
			},
			{
				id: 8,
				name: 'Wolf Cap',
				imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
				price: 14,
			},
			{
				id: 9,
				name: 'Blue Snapback',
				imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
				price: 16,
			},
		],
	},
	{
		title: 'Sneakers',
		items: [
			{
				id: 10,
				name: 'Adidas NMD',
				imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
				price: 220,
			},
			{
				id: 11,
				name: 'Adidas Yeezy',
				imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
				price: 280,
			},
			{
				id: 12,
				name: 'Black Converse',
				imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
				price: 110,
			},
			{
				id: 13,
				name: 'Nike White AirForce',
				imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
				price: 160,
			},
			{
				id: 14,
				name: 'Nike Red High Tops',
				imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
				price: 160,
			},
			{
				id: 15,
				name: 'Nike Brown High Tops',
				imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
				price: 160,
			},
			{
				id: 16,
				name: 'Air Jordan Limited',
				imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
				price: 190,
			},
			{
				id: 17,
				name: 'Timberlands',
				imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
				price: 200,
			},
		],
	},
	{
		title: 'Jackets',
		items: [
			{
				id: 18,
				name: 'Black Jean Shearling',
				imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
				price: 125,
			},
			{
				id: 19,
				name: 'Blue Jean Jacket',
				imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
				price: 90,
			},
			{
				id: 20,
				name: 'Grey Jean Jacket',
				imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
				price: 90,
			},
			{
				id: 21,
				name: 'Brown Shearling',
				imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
				price: 165,
			},
			{
				id: 22,
				name: 'Tan Trench',
				imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
				price: 185,
			},
		],
	},
	{
		title: 'Womens',
		items: [
			{
				id: 23,
				name: 'Blue Tanktop',
				imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
				price: 25,
			},
			{
				id: 24,
				name: 'Floral Blouse',
				imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
				price: 20,
			},
			{
				id: 25,
				name: 'Floral Dress',
				imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
				price: 80,
			},
			{
				id: 26,
				name: 'Red Dots Dress',
				imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
				price: 80,
			},
			{
				id: 27,
				name: 'Striped Sweater',
				imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
				price: 45,
			},
			{
				id: 28,
				name: 'Yellow Track Suit',
				imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
				price: 135,
			},
			{
				id: 29,
				name: 'White Blouse',
				imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
				price: 20,
			},
		],
	},
	{
		title: 'Mens',
		items: [
			{
				id: 30,
				name: 'Camo Down Vest',
				imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
				price: 325,
			},
			{
				id: 31,
				name: 'Floral T-shirt',
				imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
				price: 20,
			},
			{
				id: 32,
				name: 'Black & White Longsleeve',
				imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
				price: 25,
			},
			{
				id: 33,
				name: 'Pink T-shirt',
				imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
				price: 25,
			},
			{
				id: 34,
				name: 'Jean Long Sleeve',
				imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
				price: 40,
			},
			{
				id: 35,
				name: 'Burgundy T-shirt',
				imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
				price: 25,
			},
		],
	},
];
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
		<Grid item={true} xs={6} sm={6} md={3} key={product.id}>
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

					<IconButton
						sx={{
							color: theme.palette.primary.main,
							'&:hover': { color: 'blue' },
						}}
						aria-label="add to shopping cart"
					>
						<AddShoppingCartIcon />
					</IconButton>
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
			<Container className="">
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
