import { ProductActionTypes } from '../reducers/productsReducer';

export const asyncFetchAllProducts = () => ({
	type: ProductActionTypes.FETCH_PRODUCTS,
});

export const asyncGetAllProducts = (value: object) => ({
	type: ProductActionTypes.GET_ALL_PRODUCTS,
	payload: value,
});

export const asyncFetchProductsError = (value: string) => ({
	type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
	payload: value,
});

export const asyncFetchAllCategories = () => ({
	type: ProductActionTypes.FETCH_ALL_CATEGORIES,
});
export const asyncGetAllCategories = (value: object) => ({
	type: ProductActionTypes.GET_ALL_CATEGORIES,
	payload: value,
});
export const asyncFetchCatError = (value: string) => ({
	type: ProductActionTypes.FETCH_CATEGORIES_ERROR,
	payload: value,
});
