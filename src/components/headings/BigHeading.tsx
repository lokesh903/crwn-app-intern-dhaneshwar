import React from 'react';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material';

interface BigHeadingProps {
	children: React.ReactNode;
	sx?: SxProps<Theme>;
}

const BigHeading: React.FC<BigHeadingProps> = ({ children, sx, ...props }) => {
	return (
		<Typography
			component="div"
			variant="h1"
			color="inherit"
			noWrap={true}
			sx={[
				{
					// position: 'relative',
					// p: { xs: 4, sm: 4, md: 4 },	
					py: { xs: 2, sm: 4, md: 3 },	
					// pb: { xs: 2, sm: 4, md: 3 },
					m: 0,
					textAlign: 'center',
					width: '100%',
					fontWeight: 900,
					// pb: theme => `calc(${theme.spacing(1)} + 6px)`,
					// bgcolor: 'red',
					fontSize: { xs: 20, sm: 12, md: 25 },
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			{...props}
		>
			{children}
		</Typography>
	);
};

export default BigHeading;
