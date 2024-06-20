import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOq-b0WqLB6WKbFTQEkNHY24T53Xt571w",
    authDomain: "backend-app-f8fbe.firebaseapp.com",
    projectId: "backend-app-f8fbe",
    storageBucket: "backend-app-f8fbe.appspot.com",
    messagingSenderId: "102156740505",
    appId: "1:102156740505:web:3fc7c12e54b5e16de45508",
    measurementId: "G-20NBJ7FT90"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
