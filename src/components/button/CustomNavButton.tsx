import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
	endIcon?: React.ReactNode;
	startIcon?: React.ReactNode;
	children: React.ReactNode;
	sx?: SxProps<Theme>;
}

const CustomNavButton: React.FC<CustomButtonProps> = ({
	endIcon,
	startIcon,
	children,
	sx,
	...props
}) => {
	return (
		<Button
			sx={[
				{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					bgcolor: 'background.default',
					color: 'text.primary',
					borderColor: 'text.primary',
					border: '1px solid',
					borderRadius: 25,
					px: 2,
					py: 0.8,
					whiteSpace: 'nowrap',
					width: '100%',
					'&:hover': {
						bgcolor: 'text.primary',
						color: 'text.hover',
					},
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			variant="contained"
			endIcon={endIcon}
			startIcon={startIcon}
			{...props}
		>
			{children}
		</Button>
	);
};

export default CustomNavButton;
