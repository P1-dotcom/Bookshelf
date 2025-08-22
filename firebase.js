// firebase.js

// Import the functions you need from the Firebase SDKs
// These imports are for Firebase App, Authentication, and Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection, query, onSnapshot, doc, getDoc, setDoc, addDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase configuration is provided by the Canvas environment.
// We parse it from a global variable __firebase_config.
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app); // Firestore database instance
const auth = getAuth(app);   // Authentication instance

let currentUserId = null; // To store the authenticated user's ID

// Authenticate the user.
// Canvas provides a custom auth token (__initial_auth_token).
// If available, sign in with it. Otherwise, sign in anonymously.
async function authenticateUser() {
    try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
            console.log("Signed in with custom token.");
        } else {
            await signInAnonymously(auth);
            console.log("Signed in anonymously.");
        }
    } catch (error) {
        console.error("Firebase authentication error:", error);
    }
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUserId = user.uid;
        console.log("Auth state changed: User is signed in with UID:", currentUserId);
        // You can trigger data loading or other user-specific actions here
    } else {
        currentUserId = null;
        console.log("Auth state changed: User is signed out.");
    }
});

// Call authentication function when this script loads
authenticateUser();

// Export the initialized database and auth instances for use in other files
export { db, auth, currentUserId };
