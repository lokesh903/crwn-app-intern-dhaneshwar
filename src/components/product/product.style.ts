import { experimentalStyled as styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

export const ImageButton = styled(ButtonBase)(({ theme }) => ({
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

export const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
});

export const Image = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: -40,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '2px 2px',
	height: 'fit-content',
	color: theme.palette.common.white,
	[theme.breakpoints.down('sm')]: {
		bottom: -32,
		padding: '0',
		// flexDirection: 'row-reverse',
	},
}));

export const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.0011,
	transition: theme.transitions.create('opacity'),
}));

// const ImageMarked = styled('span')(({ theme }) => ({
// 	height: 3,
// 	width: 18,
// 	backgroundColor: theme.palette.common.white,
// 	position: 'absolute',
// 	bottom: -2,
// 	left: 'calc(50% - 9px)',
// 	transition: theme.transitions.create('opacity'),
// }));

export const CartImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	border: '2px solid black',
	height: 200,
	// backgroundColor: 'white',
	[theme.breakpoints.down('sm')]: {
		width: '100%', // Overrides inline-style
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
