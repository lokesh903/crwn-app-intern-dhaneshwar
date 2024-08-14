import { SxProps } from '@mui/system';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const cardElementStyles = {
	base: {
		color: 'black',
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: '16px',
		'::placeholder': {
			color: '#888',
		},
		backgroundColor: 'white',
	},
	invalid: {
		color: '#dc3545',
	},
};

export const paymentStyle: SxProps = {
	position: 'fixed',
	width: '85%',
	height: '80%',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	border: '1px solid',
	p: 1,
	bgcolor: 'background.paper',
};

export const loadingBtnStl: SxProps = {
	bgcolor: 'background.default',
	color: 'primary',
	px: 5,
	mt: 2,
	mb: 1,
	textAlign: 'center',
	flex: 'auto',
	'&:hover': {
		color: 'background.default',
		bgcolor: 'green',
		borderRadius: 2,
		textAlign: 'end',
	},
};

export const cancelBtnStl: SxProps = {
	bgcolor: 'background.default',
	color: 'primary',
	px: 5,
	mt: 1,
	mb: 1,
	'&:hover': {
		color: 'background.default',
		bgcolor: 'rgb(171, 47, 47)',
		borderRadius: 2,
		textAlign: 'end',
	},
};

export const formStl: SxProps = {
	px: 30,
	py: 5,
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
};

export const ProductContainerGrid = styled(Grid)(({ theme }) => ({
	borderBottom: `1px solid`,
	borderColor: theme.palette.divider,
	boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
	paddingBottom: theme.spacing(1),
	alignItems: 'center',
}));

export const productStl: SxProps = {
	padding: 2,
	borderRadius: 2,
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: 3,
};

export const CheckOutContainerBox = styled(Box)(({ theme }) => ({
	padding: 2,
	paddingBottom: 3,
	boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
	backgroundColor: theme.palette.mode === 'dark' ? theme.palette.divider : '',
	borderRadius: 2,
	width: '100%',
	minHeight: '70vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
}));

export const orderBtnStl: SxProps = {
	width: '100%',
	bgcolor: 'success.light',
	marginTop: 2,
	'&:hover': { bgcolor: 'success.dark' },
};
