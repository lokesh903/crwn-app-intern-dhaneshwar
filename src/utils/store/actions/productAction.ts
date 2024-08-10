import { ProductActionTypes } from '../reducers/productsReducer';

export const asyncGetAllProducts = (value: object) => ({
	type: ProductActionTypes.GET_ALL_PRODUCTS,
	payload: value,
});
