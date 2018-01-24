import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyBduXxW_VASmTbkKWLYEAKXLI-7UK2LX-w",
    authDomain: "nespresso-15ba4.firebaseapp.com",
    databaseURL: "https://nespresso-15ba4.firebaseio.com",
    projectId: "nespresso-15ba4",
    storageBucket: "",
    messagingSenderId: "860526041637"
});

export const db = app.database();
export const productsRef = db.ref('products');
