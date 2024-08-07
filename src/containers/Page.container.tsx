import { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

interface PageContainerProps {
	children: React.ReactNode;
	sx?: SxProps<Theme>;
}

const PageContainer: React.FC<PageContainerProps> = ({
	children,
	sx,
	...props
}) => {
	return (
		<Box
			sx={[
				{
					width: '100%',
					height: '100%',
					// bgcolor: 'gray',
					pl: { xs: 3, sm: 0, md: 5 },
					pr: { xs: 3, sm: 0, md: 5 },
					pt: { xs: 10, sm: 0, md: 9 },
					pb: { xs: 10, sm: 0, md: 9 },
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			{...props}
		>
			{children}
		</Box>
	);
};

export default PageContainer;
