// import React from 'react';

// const ProductCard: React.FC = () => {
// 	const theme = useTheme();

// 	return (<Grid item={true} xs={6} sm={6} md={3} key={product.id}>
// 			<ImageButton
// 				focusRipple
// 				style={{
// 					width: '100%',
// 					height: '25vh',
// 				}}
// 				sx={{ mt: 2 }}
// 			>
// 				<ImageSrc style={{ backgroundImage: `url(${product?.imageUrl})` }} />
// 				<ImageBackdrop className="MuiImageBackdrop-root" />
// 				<Image
// 					sx={{
// 						// bgcolor: 'green',
// 						opacity: 0.5,
// 					}}
// 				>
// 					<Stack spacing={-1}>
// 						<Typography
// 							variant="button"
// 							display="block"
// 							sx={{
// 								textTransform: 'capitalize',
// 								color: theme.palette.text.secondary,
// 								fontWeight: '900',
// 							}}
// 							gutterBottom
// 						>
// 							{product?.name}
// 						</Typography>
// 						<Typography
// 							variant="button"
// 							display="block"
// 							sx={{
// 								display: 'flex',
// 								alignItems: 'start',
// 								fontWeight: '900',
// 								color: theme.palette.text.primary,
// 							}}
// 							gutterBottom
// 						>
// 							${product?.price}
// 						</Typography>
// 					</Stack>

// 					<IconButton
// 						sx={{
// 							color: theme.palette.primary.main,
// 							'&:hover': { color: 'blue' },
// 						}}
// 						aria-label="add to shopping cart"
// 					>
// 						<AddShoppingCartIcon />
// 					</IconButton>
// 				</Image>
// 			</ImageButton>
// 		</Grid>);
// };

// export default ProductCard;


// const ProductCard = React.memo(({ product }: { product: Item }) => {
// 	return (
		
// 	);
// });