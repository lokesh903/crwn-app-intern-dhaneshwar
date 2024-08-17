import { ProductActionTypes } from '../reducers/productsReducer';

export const asyncFetchAllProducts = () => ({
	type: ProductActionTypes.FETCH_PRODUCTS,
});

export const asyncGetAllProducts = (value: object) => ({
	type: ProductActionTypes.GET_ALL_PRODUCTS,
	payload: value,
});

export const asyncFetchProductsErroR = (value: string) => ({
	type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
	payload: value,
});
