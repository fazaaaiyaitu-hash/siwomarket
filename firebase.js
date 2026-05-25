import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBvjdO78HslTn9RHM4-tLsdQbJyKsSsxJk",
    authDomain: "website-5fe39.firebaseapp.com",
    projectId: "website-5fe39",
    storageBucket: "website-5fe39.firebasestorage.app",
    messagingSenderId: "243807840965",
    appId: "G-C2V2JBT1BT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
