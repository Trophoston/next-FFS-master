// firebase.config.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAuj8AoAEgapHa4QsyJBAodumYwG1kD2kY",
    authDomain: "ffs-thailand.firebaseapp.com",
    databaseURL: "https://ffs-thailand-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ffs-thailand",
    storageBucket: "ffs-thailand.appspot.com",
    messagingSenderId: "708774107536",
    appId: "1:708774107536:web:cfce309bafea77a8be7b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);

export { storage };
