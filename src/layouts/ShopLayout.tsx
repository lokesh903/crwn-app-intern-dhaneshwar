import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageContainer } from '../containers';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/types/types';
// import { useProductContext } from '../context';

const ShopLayout: React.FC = () => {
	// const { allProducts } = useProductContext();
	const { allProducts } = useSelector((state: RootState) => state.products);
	//   console.log(allProducts);

	return (
		<div>
			<PageContainer>
				<Outlet context={{ allProducts }} />
			</PageContainer>
		</div>
	);
};

export default ShopLayout;
