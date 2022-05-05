import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBgAr_znpdJDbrhaZDwvMzMzRkN8eqzYo4',
	authDomain: 'my-portfolio-c77b2.firebaseapp.com',
	projectId: 'my-portfolio-c77b2',
	storageBucket: 'my-portfolio-c77b2.appspot.com',
	messagingSenderId: '683052384850',
	appId: '1:683052384850:web:abb1a18c3f2f6ae3edd58b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();
export const storage = getStorage();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});
