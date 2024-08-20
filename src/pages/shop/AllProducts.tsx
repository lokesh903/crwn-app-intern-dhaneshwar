import React from 'react';
import { BigHeading, ProductCard, SubHeading } from '../../components';
import { ProductGridContainer, ProductsContainer } from '../../containers';
import { RootState } from '../../utils/types/types';
import { useSelector } from 'react-redux';
import Loading from '../../assets/loadingg.gif';

const AllProducts: React.FC = () => {
	const { allProducts, loading } = useSelector(
		(state: RootState) => state.products
	);
	// console.log(error);

	return (
		<>
			<BigHeading>All Products</BigHeading>
			<ProductsContainer sx={{ minHeight: '70vh' }}>
				{loading ? (
					// <SubHeading>Loading..</SubHeading>
					<img src={Loading} alt="Loading Icon...." />
				) : (
					allProducts &&
					allProducts.map(category => (
						<React.Fragment key={category.title}>
							<SubHeading>{category?.title.toUpperCase()}</SubHeading>

							<ProductGridContainer>
								{category?.items?.map(product => (
									<ProductCard key={product.id} product={product} />
								))}
							</ProductGridContainer>
						</React.Fragment>
					))
				)}
			</ProductsContainer>
		</>
	);
};

export default AllProducts;
