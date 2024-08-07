import React from 'react';
import Container from '@mui/material/Container';
import { SxProps, Theme } from '@mui/material';

interface CommanPropsValue {
	children: React.ReactNode;
	sx: SxProps<Theme>;
}

const ProductsContainer: React.FC<CommanPropsValue> = ({
	children,
	sx,
	...props
}) => {
	return (
		<Container
			sx={[
				{
					// bgcolor: 'gray',
					border: '2px solid black ',
					pt: 2,
					pb: 8,
					display: 'flex',
					alignItems: 'center ',
					justifyContent: 'center',
					flexDirection: 'column',
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			{...props}
		>
			{children}
		</Container>
	);
};

export default ProductsContainer;
