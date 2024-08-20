import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageContainer } from '../containers';
// import { useProductContext } from '../context';

const ShopLayout: React.FC = () => {
	// const { allProducts } = useProductContext();

	return (
		<div>
			<PageContainer>
				<Outlet/>
			</PageContainer>
		</div>
	);
};

export default ShopLayout;
