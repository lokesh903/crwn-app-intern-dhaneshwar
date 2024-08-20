import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BigHeading, ProductCard, SubHeading } from '../../components';
import { ProductGridContainer, ProductsContainer } from '../../containers';
import { ProductTypeValue, RootState } from '../../utils/types/types';
import { useSelector } from 'react-redux';
import Loading from '../../assets/loadingg.gif';

const CategoryPreview: React.FC = () => {
	const { categoryName } = useParams<{ categoryName: string | undefined }>();
	const { allProducts, loading } = useSelector(
		(state: RootState) => state.products
	);
	// console.log(error);
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
			<ProductsContainer sx={{ minHeight: loading ? '70vh' : '' }}>
				{loading ? (
					<img src={Loading} alt="Loading Icon..." />
				) : (
					<>
						<SubHeading>{categoryName?.toUpperCase()}</SubHeading>
						<ProductGridContainer>
							{categoryProducts?.map(product => (
								<ProductCard key={product.id} product={product} />
							))}
						</ProductGridContainer>
					</>
				)}
			</ProductsContainer>
		</>
	);
};

export default CategoryPreview;
