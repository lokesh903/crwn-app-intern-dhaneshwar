import React from 'react';
import Container from '@mui/material/Container';
import { CommonProp } from '../utils/types/types';


const ProductsContainer: React.FC<CommonProp> = ({
	children,
	sx,
	...props
}) => {
	return (
		<Container
			sx={[
				{
					// bgcolor: 'gray',
					// borderLeft: '2px solid black ',
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
