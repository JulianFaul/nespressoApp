import {initializeApp} from 'firebase';

const app = initializeApp({
    storageBucket: "nespresso-15ba4.appspot.com",
    apiKey: "AIzaSyBduXxW_VASmTbkKWLYEAKXLI-7UK2LX-w",
    authDomain: "nespresso-15ba4.firebaseapp.com",
    databaseURL: "https://nespresso-15ba4.firebaseio.com",
    projectId: "nespresso-15ba4",
    storageBucket: "nespresso-15ba4.appspot.com"
});

export const db = app.database();
export const productsRef = db.ref('products');
