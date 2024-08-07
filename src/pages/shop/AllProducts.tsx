import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { ProductsContainer } from '../../containers';
import { BigHeading, ProductCard } from '../../components';
import CategoryPreview from '../category-preview/CategoryPreview';
import { Grid } from '@mui/material';

interface ProductTypeValue {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
interface ProductTypeParent {
	title: string;
	items: ProductTypeValue[];
}
interface ProductContextValue {
	allProducts: ProductTypeParent[];
}
const AllProducts: React.FC = () => {
	const { categoryName } = useParams<{ categoryName: string }>();
	const { allProducts } = useOutletContext<ProductContextValue>();
	const [categoryProducts, setCategoryProducts] = useState<
		ProductTypeValue[] | null
	>(null);
	useEffect(() => {
		if (categoryName) {
			const sortedCategoryProduct = allProducts.find(
				product => product.title.toLowerCase() === categoryName.toLowerCase()
			);
			if (sortedCategoryProduct) {
				setCategoryProducts(sortedCategoryProduct.items);
			} else {
				setCategoryProducts([]);
			}
		} else {
			const allItemsData = allProducts.flatMap(product => product.items);
			setCategoryProducts(allItemsData);
		}
	}, [categoryName, allProducts]);

	return (
		<>
			{categoryName ? (
				<>
					<BigHeading>Sorted Category Wise Product</BigHeading>
					<ProductsContainer sx={{}}>
						<BigHeading>{categoryName.toUpperCase()}</BigHeading>
						<Grid
							container
							spacing={{ xs: 3, md: 3 }}
							columns={{ xs: 12, sm: 8, md: 12 }}
						>
							{categoryProducts?.map(product => (
								<ProductCard key={product.id} product={product} />
							))}
						</Grid>
					</ProductsContainer>
				</>
			) : (
				<>
					<BigHeading>All Products</BigHeading>
					{allProducts.map((products, idx) => {
						// console.log(products);
						return (
							<CategoryPreview
								key={idx}
								title={products.title}
								items={products.items}
								allProducts={allProducts}
							/>
						);
					})}
				</>
			)}
		</>
	);
};

export default AllProducts;
