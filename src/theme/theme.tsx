import { PaletteMode } from '@mui/material';
import { amber, blueGrey, grey, purple } from '@mui/material/colors';

const theme = {
	palette: {
		primary: amber,
	},
};
// const primary = grey[50];
// const primar= red[500]; // #f44336
export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						main: grey[900],
					},
					secondary: {
						main: '#f44336',
					},
					divider: amber[200],
					background: {
						default: blueGrey[50],
						paper: blueGrey[50],
					},
					text: {
						primary: 'rgb(0,0,0)',
						secondary: 'rgb(0,0,0)',
						hover: 'white',
					},
			  }
			: {
					// palette values for dark mode
					primary: {
						main: 'rgb(255,255,255)',
					},
					secondary: {
						main: '#f44336',
					},
					divider: blueGrey[700],
					background: {
						default: '#101014de',
						paper: blueGrey[700],
					},
					text: {
						primary: '#fff',
						secondary: 'rgb(255,255,255)',
						hover: 'rgb(0,0,0)',
					},
			  }),
	},
});

export default theme;
