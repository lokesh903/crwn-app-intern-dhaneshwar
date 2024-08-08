import React from 'react';
import Box from '@mui/material/Box';
import { CommonProp } from '../utils/types/types';

const NavigationContainer: React.FC<CommonProp> = ({
	children,
	sx,
	...props
}) => {
	return (
		<Box
			sx={[
				{
					width: '100%',
					position: 'fixed',
					zIndex: 100,
					top: 0,
					left: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					px: { xs: 0, sm: 0, md: 5 },
					py: { xs: 0, sm: 0, md: 1 },
					mt: 1,
					borderRadius: 2,
					bgcolor: 'background.nav',
					backdropFilter: 'blur(10px)',
					WebkitBackdropFilter: 'blur(10px)',
					boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			{...props}
		>
			{children}
		</Box>
	);
};

export default NavigationContainer;
