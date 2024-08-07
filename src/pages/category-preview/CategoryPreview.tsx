import React from 'react';
import { Grid } from '@mui/material';
import { ProductCard, SubHeading } from '../../components';
import { ProductsContainer } from '../../containers';

interface Item {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}

interface ProductCategory {
	title: string;
	items: Item[];
}

interface CategoryPreviewProps {
	title: string;
	items: Item[];
	allProducts: ProductCategory[];
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ title, items }) => {
	return (
		<>
			<ProductsContainer sx={{}}>
				<SubHeading>{title?.toLocaleUpperCase()}</SubHeading>
				<Grid
					container
					spacing={{ xs: 3, md: 3 }}
					columns={{ xs: 12, sm: 8, md: 12 }}
					// sx={{ mt: { xs: 6, sm: 6, md: 6 } }}
				>
					{items?.map((product: Item) => (
						<ProductCard key={product.id} product={product} />
					))}
				</Grid>
			</ProductsContainer>
		</>
	);
};

export default CategoryPreview;
