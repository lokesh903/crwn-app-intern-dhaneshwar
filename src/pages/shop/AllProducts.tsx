import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { BigHeading, ProductCard, SubHeading } from '../../components';
import { ProductGridContainer, ProductsContainer } from '../../containers';
import { ProductContextValue } from '../../utils/types/types';

const AllProducts: React.FC = () => {
	const { allProducts } = useOutletContext<ProductContextValue>();

	// console.log(allProducts);
	return (
		<>
			<BigHeading>All Products</BigHeading>
			<ProductsContainer sx={{}}>
				{allProducts.map(category => (
					<React.Fragment key={category.title}>
						<SubHeading>{category?.title.toUpperCase()}</SubHeading>
						<ProductGridContainer>
							{category?.items?.map(product => (
								<ProductCard key={product.id} product={product} />
							))}
						</ProductGridContainer>
					</React.Fragment>
				))}
			</ProductsContainer>
		</>
	);
};

export default AllProducts;
