export enum ProductActionTypes {
	GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
}
export interface ProductItemTypeValue {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
export interface ProductTypeParent {
	title: string;
	items: ProductItemTypeValue[];
}
export interface ProductContextValue {
	allProducts: ProductTypeParent[];
}
const initialProduct: ProductContextValue = {
	allProducts: [],
};

type Action = {
	type: ProductActionTypes.GET_ALL_PRODUCTS;
	payload: ProductTypeParent[];
};

const productsReducer = (
	productState = initialProduct,
	action: Action
): ProductContextValue => {
	switch (action.type) {
		case ProductActionTypes.GET_ALL_PRODUCTS:
			return {
				...productState,
				allProducts: action.payload,
			};
		default:
			return productState;
	}
};
export default productsReducer;
