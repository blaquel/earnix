import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyChi8M-iJaXsqOOFrwqD25aJJQoCMdaVVU",
    authDomain: "earnix-c7507.firebaseapp.com",
    projectId: "earnix-c7507",
    storageBucket: "earnix-c7507.firebasestorage.app",
    messagingSenderId: "930659607352",
    appId: "1:930659607352:web:4d1c3bce0cfd39d4e417cd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);