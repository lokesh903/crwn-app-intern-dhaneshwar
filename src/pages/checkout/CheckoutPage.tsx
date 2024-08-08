import React, { useEffect, useState } from 'react';
import { PageContainer, ProductsContainer } from '../../containers';
import { BigHeading, CartItems, ProductCard } from '../../components';
import { Grid } from '@mui/material';
import { useCartDataContext } from '../../context';
import { CartProduct } from '../../components/product';

interface ProductTypeValue {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}
interface ProductTypeParent {
	title: string;
	items: ProductTypeValue[];
}
interface ProductContextValue {
	allProducts: ProductTypeParent[];
}
const CartCheckoutPage: React.FC = () => {
	const { cartState } = useCartDataContext();
	const { cartItemCount, cartItemsTotal, cartItems } = cartState;
	// const [cartProducts, setCartProducts] = useState<ProductTypeValue[] | null>(
	// 	null
	// );
	// useEffect(() => {
	// 	if (categoryName) {
	// 		const sortedCategoryProduct = allProducts.find(
	// 			product => product.title.toLowerCase() === categoryName.toLowerCase()
	// 		);
	// 		if (sortedCategoryProduct) {
	// 			setCategoryProducts(sortedCategoryProduct.items);
	// 		} else {
	// 			setCategoryProducts([]);
	// 		}
	// 	} else {
	// 		const allItemsData = allProducts.flatMap(product => product.items);
	// 		setCategoryProducts(allItemsData);
	// 	}
	// }, [categoryName, allProducts]);
	useEffect(() => {}, []);

	return (
		<>
			<PageContainer sx={{}}>
				<BigHeading>Checkout</BigHeading>
				<Grid
					container
					spacing={{ xs: 3, md: 3 }}
					columns={{ xs: 12, sm: 8, md: 12 }}
				>
					{/* <ProductsContainer sx={{}}> */}
						{/* {cartItems?.map(product => (
							<CartProduct key={product.id} product={product} />
						))} */}
						<CartItems
							cartItems={cartItems}
							cartItemCount={cartItemCount}
							cartItemsTotal={cartItemsTotal}
						/>
					{/* </ProductsContainer> */}
				</Grid>
			</PageContainer>
		</>
	);
};

export default CartCheckoutPage;
