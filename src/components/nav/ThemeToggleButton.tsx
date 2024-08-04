import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../theme/ThemeContextProvider';

const ThemeToggleButton = () => {
	const { mode, toggleColorMode } = useThemeContext();

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.default',
				color: 'text.primary',
				borderColor: 'text.primary',
				border: '1px solid',
				borderRadius: 25,
				p: 0,
				width: 'fit-content',
				position: 'relative',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: { xs: 57, md: 42 },
					right: { xs: 17, md: -2 },
					bgcolor: 'background.default',
					borderRadius: 25,
					px: { xs: '10px', md: '10px' },
					fontSize: { xs: '10px', md: '12px' },
				}}
			>
				<span className="capitalize">{mode}</span>
			</Box>
			<IconButton onClick={toggleColorMode} color="inherit">
				{mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	);
};

export default ThemeToggleButton;
