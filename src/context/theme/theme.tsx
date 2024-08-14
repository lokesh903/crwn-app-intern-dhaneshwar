import { PaletteMode } from '@mui/material';
import { amber, blueGrey, grey } from '@mui/material/colors';

const theme = {
	palette: {
		primary: amber,
	},
};
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
					divider: 'rgba(12, 12, 12, 0.5)',
					background: {
						default: blueGrey[50],
						paper: blueGrey[50],
						nav: 'rgba(12, 12, 12, 0.5)',
						// nav: 'rgba(12, 12, 12, 0.4)',
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
						nav: 'rgba(255, 255, 255, 0.50)',
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
