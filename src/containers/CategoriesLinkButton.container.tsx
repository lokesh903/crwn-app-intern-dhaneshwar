import { Box, Grid } from '@mui/material';
import React from 'react';
// import { PRODUCT_CATEGORIES } from '../utils/config/ClothingData';
import { CategoriesLinkBtn } from '../components';
import { useSelector } from 'react-redux';
import { RootState } from '@src/utils/types/types';
import Loading from '@src/assets/loadingg.gif';

// const categories = PRODUCT_CATEGORIES;

const CategoriesLinkButtonsContainer: React.FC = () => {
	const { categories, loading } = useSelector(
		(state: RootState) => state.products
	);
	return (
		<Box sx={{ flexGrow: 1, position: 'relative' }}>
			{loading ? (
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '80vh',
					}}
				>
					<img src={Loading} alt="Loading Icon...." />
				</Box>
			) : (
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{categories.map((category, index) => (
						<CategoriesLinkBtn category={category} key={index} />
					))}
				</Grid>
			)}
		</Box>
	);
};

export default CategoriesLinkButtonsContainer;
