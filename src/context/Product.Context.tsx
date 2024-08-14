import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	// asyncAddProductDataToFirestore,
	asyncGetAllProductsDataFromFirestore,
} from '../utils/config/FirebaseProductAction';

interface ProductTypeValue {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
interface ProductTypeParent {
	title: string;
	items: ProductTypeValue[];
}
interface ProductContextValue {
	allProducts: ProductTypeParent[];
}
const initialProduct: ProductContextValue = {
	allProducts: [],
};

export const ProductsDataContext = createContext(initialProduct);

export const ProductsDataContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [allProducts, setAllProducts] = useState<ProductTypeParent[]>(
		initialProduct.allProducts
	);

	// Function to ADD ALL PRODUCTS to Firestore
	// const addAllDataToFireStore = async () => {
	// 	const data = await asyncAddProductDataToFirestore();
	// 	console.log(data);
	// };

	// Funtions for FETCH ALL PRODUCTS from FIRESTORE in First Render
	const getAllData = async () => {
		const data = await asyncGetAllProductsDataFromFirestore();
		setAllProducts(data);
	};

	useEffect(() => {
		// addAllDataToFireStore();
		getAllData();
	}, []);

	return (
		<ProductsDataContext.Provider value={{ allProducts }}>
			{children}
		</ProductsDataContext.Provider>
	);
};

export const useProductContext = () => {
	return useContext(ProductsDataContext);
};
