import { Box, Grid } from '@mui/material';
import React from 'react';
import { PRODUCT_CATEGORIES } from '../utils/config/ClothingData';
import { CategoriesLinkBtn } from '../components';

const categories = PRODUCT_CATEGORIES;

const CategoriesLinkButtonsContainer: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1, position: 'relative' }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{categories.map((category, index) => (
					<CategoriesLinkBtn category={category} key={index} />
				))}
			</Grid>
		</Box>
	);
};

export default CategoriesLinkButtonsContainer;
