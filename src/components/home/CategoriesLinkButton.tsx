import { Box, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { PRODUCT_CATEGORIES } from '../../utils/store/ClothingData';

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
		'& .MuiTypography-root': {
			border: '4px solid currentColor',
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
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
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


const categories = PRODUCT_CATEGORIES;

const CategoriesLinkButton: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			{/* CategoriesLinkButton Page{' '} */}
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{categories.map((cat, index) => (
					<Grid item={true} xs={12} sm={6} md={4} key={index}>
						<ImageButton
							focusRipple
							style={{
								width: '100%',
								height: '28vh',
							}}
						>
							<ImageSrc style={{ backgroundImage: `url(${cat.imageUrl})` }} />
							<ImageBackdrop className="MuiImageBackdrop-root" />
							<Image>
								<Link to={`/shop/category/${cat.title}`}>
									<Typography
										component="span"
										variant="subtitle1"
										color="inherit"
										sx={{
											position: 'relative',
											p: 4,
											pt: 2,
											fontWeight: 900,
											pb: theme => `calc(${theme.spacing(1)} + 6px)`,
											// bgcolor: 'red',
										}}
									>
										{cat.title.toUpperCase()}
										<ImageMarked className="MuiImageMarked-root" />
									</Typography>
								</Link>
							</Image>
						</ImageButton>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default CategoriesLinkButton;
