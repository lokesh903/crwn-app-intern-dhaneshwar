import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { BigHeading, ProductCard, SubHeading } from '../../components';
import { ProductGridContainer, ProductsContainer } from '../../containers';
import { ProductContextValue, ProductTypeValue } from '../../utils/types/types';

const CategoryPreview: React.FC = () => {
	const { categoryName } = useParams<{ categoryName: string | undefined }>();
	const { allProducts } = useOutletContext<ProductContextValue>();
	const [categoryProducts, setCategoryProducts] = useState<
		ProductTypeValue[] | null
	>(null);

	useEffect(() => {
		if (!categoryName) {
			return;
		}
		const sortedCategoryProduct = allProducts.find(
			product => product.title.toLowerCase() === categoryName.toLowerCase()
		);

		if (sortedCategoryProduct) {
			setCategoryProducts(sortedCategoryProduct.items);
		} else {
			setCategoryProducts([]);
		}
	}, [categoryName, allProducts]);

	return (
		<>
			<BigHeading>Sorted Category Wise Product</BigHeading>
			<ProductsContainer sx={{}}>
				<SubHeading>{categoryName?.toUpperCase()}</SubHeading>
				<ProductGridContainer>
					{categoryProducts?.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</ProductGridContainer>
			</ProductsContainer>
		</>
	);
};

export default CategoryPreview;
