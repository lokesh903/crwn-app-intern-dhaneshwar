import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDBSCahYH5oYkMqnhLjaLCxU3gIp0Hht1g',
	authDomain: 'trendz-clothing-81374.firebaseapp.com',
	projectId: 'trendz-clothing-81374',
	storageBucket: 'trendz-clothing-81374.appspot.com',
	messagingSenderId: '413736485404',
	appId: '1:413736485404:web:25977e4a9861bc547715d9',
	measurementId: 'G-TPPHF443KV',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
