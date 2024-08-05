import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
// import { SHOP_DATA_PRODUCTS } from '../utils/store/ClothingData';
import { db } from '../utils/config/Firebase';
import {
	collection,
	// doc,
	getDocs,
	query,
	// writeBatch,
} from 'firebase/firestore';

interface ProductTypeValue {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
interface ProductTypeParent {
	title: string;
	items:  ProductTypeValue [];
}
interface ProductContextValue {
	allProducts: ProductTypeParent[];
}
const initialProduct: ProductContextValue = {
	allProducts: [],
};

// const PRODUCTS_DATA: ProductTypeParent[] = SHOP_DATA_PRODUCTS;

export const ProductsDataContext = createContext(initialProduct);

export const ProductsDataContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [allProducts, SetAllProducts] = useState<ProductTypeParent[]>(
		initialProduct.allProducts
	);

	// Function to add product categories to Firestore
	// const addProductCategoriesToFirestore = async () => {
	// 	const collectionRefForData = collection(db, 'clothData');
	// 	const batch = writeBatch(db);
	// 	PRODUCTS_DATA.forEach(object => {
	// 		const documentCategoryRef = doc(
	// 			collectionRefForData,
	// 			object?.title.toLowerCase()
	// 		);
	// 		batch.set(documentCategoryRef, { items: object.items });
	// 	});
	// 	await batch.commit();
	// 	// console.log('Data added to Firestore');
	// };

	// Function to fetch categories map from Firestore
	const getCategoriesMap = async () => {
		const collectionRef = collection(db, 'clothData');
		const q = query(collectionRef);
		const querySnapshot = await getDocs(q);
		// console.log(querySnapshot);
		const categoryMap = querySnapshot.docs.map(docSnapShot => {
			const data = docSnapShot.data();
			return {
				title: docSnapShot.id,
				items: data.items as ProductTypeValue[],
			};
		});
		SetAllProducts(categoryMap);
	};

	useEffect(() => {
		// const checkAndStoreData = async () => {
		// 	const collectionRef = collection(db, 'clothData');
		// 	const q = query(collectionRef);
		// 	const querySnapshot = await getDocs(q);
		// 	if (querySnapshot.empty) {
		// 		await addProductCategoriesToFirestore();
		// 	} else {
		// 		// Data already exists, fetch it
		// 		const categoryMap = await getCategoriesMap();
		// 		SetAllProducts({ (allProducts: categoryMap });
		// 	}
		// };
		getCategoriesMap();
		// checkAndStoreData();
	}, []);
	console.log(allProducts);

	return (
		<ProductsDataContext.Provider value={{ allProducts }}>
			{children}
		</ProductsDataContext.Provider>
	);
};

export default function useProductContext() {
	return useContext(ProductsDataContext);
}
