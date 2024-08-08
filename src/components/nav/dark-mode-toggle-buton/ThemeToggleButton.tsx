import { Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../../context/theme/ThemeContextProvider';
import { CustomNavButton } from '../../button';

const ThemeToggleButton = () => {
	const { mode, toggleColorMode } = useThemeContext();

	return (
		<CustomNavButton
			onClick={toggleColorMode}
			sx={{ position: 'relative', display: { xs: 'none', md: 'flex' } }}
		>
			<Box
				sx={{
					position: 'absolute',
					top: { xs: 47, md: 0 },
					right: { xs: 17, md: -20 },
					bgcolor: 'background.default',
					borderRadius: 25,
					px: { xs: '10px', md: '8px' },
					fontSize: { xs: '10px', md: '10px' },

					color: 'text.primary',
					'&:hover': {
						color: 'text.hover',
						bgcolor: 'text.primary',
						borderRadius: 2,
					},
				}}
			>
				<span className="capitalize">{mode}</span>
			</Box>
			<div color="inherit">
				{mode === 'dark' ? (
					<Brightness7Icon fontSize="small" />
				) : (
					<Brightness4Icon fontSize="small" />
				)}
			</div>
		</CustomNavButton>
	);
};

export default ThemeToggleButton;
