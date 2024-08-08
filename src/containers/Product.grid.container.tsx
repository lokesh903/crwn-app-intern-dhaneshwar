import React from 'react';
import { CommonProp } from '../utils/types/types';
import Grid from '@mui/material/Grid';

const ProductGridContainer: React.FC<CommonProp> = ({ children }) => {
	return (
		<Grid
			container
			spacing={{ xs: 3, md: 3 }}
			columns={{ xs: 12, sm: 8, md: 12 }}
		>
			{children}
		</Grid>
	);
};

export default ProductGridContainer;
