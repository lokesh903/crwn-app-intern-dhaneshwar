import { ThunkAction } from 'redux-thunk';
import { ProductContextValue, RootState } from '../../types/types';
import {
	asyncGetAllCategoriesFromFirestore,
	asyncGetAllProductsDataFromFirestore,
} from '../../config/FirebaseProductAction';
import {
	asyncFetchAllProducts,
	asyncFetchProductsError,
	asyncFetchAllCategories,
	asyncGetAllCategories,
	asyncGetAllProducts,
	asyncFetchCatError,
} from '../actions/productAction';

export enum ProductActionTypes {
	GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
	FETCH_PRODUCTS = 'FETCH_PRODUCTS',
	FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
	FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES',
	GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES',
	FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
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
export interface CategoryTypeValue {
	id: number;
	imageUrl: string;
	route: string;
	title: string;
}

const initialProduct: ProductContextValue = {
	allProducts: [],
	loading: false,
	error: '',
	categories: [],
};

type Action =
	| { type: ProductActionTypes.FETCH_PRODUCTS }
	| { type: ProductActionTypes.GET_ALL_PRODUCTS; payload: ProductTypeParent[] }
	| { type: ProductActionTypes.FETCH_PRODUCTS_ERROR; payload: string }
	| { type: ProductActionTypes.FETCH_ALL_CATEGORIES }
	| {
			type: ProductActionTypes.GET_ALL_CATEGORIES;
			payload: CategoryTypeValue[];
	  }
	| {
			type: ProductActionTypes.FETCH_CATEGORIES_ERROR;
			payload: string;
	  };

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
		case ProductActionTypes.FETCH_ALL_CATEGORIES:
			return {
				...productState,
				loading: true,
			};
		case ProductActionTypes.GET_ALL_CATEGORIES:
			return {
				...productState,
				loading: false,
				categories: action.payload,
			};
		case ProductActionTypes.FETCH_CATEGORIES_ERROR:
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

export const getAllCategories =
	(): ThunkAction<void, RootState, unknown, any> => async dispatch => {
		dispatch(asyncFetchAllCategories());
		try {
			const data = await asyncGetAllCategoriesFromFirestore();
			// console.log(data);
			if (data) {
				dispatch(asyncGetAllCategories(data));
			}
		} catch (error) {
			const typedError = error as Error;
			dispatch(asyncFetchCatError(typedError.message));
			console.log(typedError);
		}
	};
