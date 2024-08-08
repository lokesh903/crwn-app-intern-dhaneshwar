import React from 'react';
import {
	CategoriesLinkButtonsContainer,
	PageContainer,
} from '../../containers';
import { BigHeading } from '../../components';

const HomePage: React.FC = () => {

	return (
		<PageContainer>
			<BigHeading sx={{ textAlign: 'center' }}>
				-: All Categories Types :-
			</BigHeading>
			<CategoriesLinkButtonsContainer />
		</PageContainer>
	);
};

export default HomePage;
