import { ThunkAction } from 'redux-thunk';
import { ProductContextValue, RootState } from '../../types/types';
import { asyncGetAllProductsDataFromFirestore } from '../../config/FirebaseProductAction';
import {
	asyncFetchAllProducts,
	asyncFetchProductsError,
	asyncGetAllProducts,
} from '../actions/productAction';

export enum ProductActionTypes {
	GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
	FETCH_PRODUCTS = 'FETCH_PRODUCTS',
	FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
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

const initialProduct: ProductContextValue = {
	allProducts: [],
	loading: false,
	error: '',
};

type Action =
	| { type: ProductActionTypes.FETCH_PRODUCTS }
	| { type: ProductActionTypes.GET_ALL_PRODUCTS; payload: ProductTypeParent[] }
	| { type: ProductActionTypes.FETCH_PRODUCTS_ERROR; payload: string };

const productsReducer = (
	productState = initialProduct,
	action: Action
): ProductContextValue => {
	switch (action.type) {
		case ProductActionTypes.FETCH_PRODUCTS:
			return {
				...productState,
				loading: true,
			};
		case ProductActionTypes.GET_ALL_PRODUCTS:
			return {
				...productState,
				loading: false,
				allProducts: action.payload,
			};
		case ProductActionTypes.FETCH_PRODUCTS_ERROR:
			return {
				...productState,
				loading: false,
				error: action.payload || 'Something went Wrong',
			};
		default:
			return productState;
	}
};

export default productsReducer;

export const getAllData =
	(): ThunkAction<void, RootState, unknown, any> => async dispatch => {
		dispatch(asyncFetchAllProducts());
		try {
			const data = await asyncGetAllProductsDataFromFirestore();
			// console.log(data);
			if (data) {
				dispatch(asyncGetAllProducts(data));
			}
		} catch (error) {
			const typedError = error as Error;
			dispatch(asyncFetchProductsError(typedError.message));
			console.log(typedError);
		}
	};
