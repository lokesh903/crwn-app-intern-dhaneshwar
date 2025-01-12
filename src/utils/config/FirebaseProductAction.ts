import {
	addDoc,
	collection,
	doc,
	DocumentData,
	getDocs,
	query,
	QueryDocumentSnapshot,
	writeBatch,
} from 'firebase/firestore';
import { db } from './Firebase';
import { PRODUCT_CATEGORIES, SHOP_DATA_PRODUCTS } from './ClothingData';

const PRODUCTS_DATA = SHOP_DATA_PRODUCTS;

interface ProductTypeValue {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
// --------------- FIRESTORE ALL ProductS Actions ---------- //

/* --- GET ALL PRODUCTS DATA FROM FIRESTORE --- */
export const asyncGetAllProductsDataFromFirestore = async () => {
	const collectionRef = collection(db, 'clothData');
	const lookQuery = query(collectionRef);
	const querySnapshot = await getDocs(lookQuery);
	// console.log(querySnapshot);
	const allDataCollection = querySnapshot.docs.map(
		(docSnapShot: QueryDocumentSnapshot<DocumentData>) => {
			const data = docSnapShot.data();
			return {
				title: docSnapShot.id,
				items: data.items as ProductTypeValue[],
			};
		}
	);
	return allDataCollection;
};

/* --- SET/ADD ALL PRODUCTS DATA IN FIRESTORE --- */
export const asyncAddProductDataToFirestore = async () => {
	const collectionRefForData = collection(db, 'clothData');
	const batch = writeBatch(db);
	PRODUCTS_DATA.forEach(object => {
		const documentCategoryRef = doc(
			collectionRefForData,
			object?.title.toLowerCase()
		);
		batch.set(documentCategoryRef, { items: object.items });
	});
	await batch.commit();
	return 'All Data Added Successfully';
};

/* --- SET/ADD ALL CATEGORIES DATA IN FIRESTORE --- */
export const asyncAddCategoriesDataToFirestore = async () => {
	try {
		const collectionRefForData = collection(db, 'categories');
		const promises = PRODUCT_CATEGORIES.map(async cat => {
			await addDoc(collectionRefForData, cat);
		});
		await Promise.all(promises);
		return 'Product categories added successfully!';
	} catch (error) {
		console.error('Error adding product categories: ', error);
		return 'Error adding product categories.';
	}
};

export const asyncGetAllCategoriesFromFirestore = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);
	// console.log(querySnapshot);
	const allCategoriesCollection = querySnapshot.docs.map(
		(docSnapShot: QueryDocumentSnapshot<DocumentData>) => {
			const data = docSnapShot.data();
			return {
				id: docSnapShot.id,
				...data,
			};
		}
	);
	return allCategoriesCollection;
};
