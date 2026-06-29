import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmUmkK_dCbcrLC4RrsRKlqR8Bsd36G0G0",
  authDomain: "vura-95d02.firebaseapp.com",
  databaseURL: "https://vura-95d02-default-rtdb.firebaseio.com",
  projectId: "vura-95d02",
  storageBucket: "vura-95d02.firebasestorage.app",
  messagingSenderId: "793157386911",
  appId: "1:793157386911:web:3ca94ed14b9d0c5f1318aa",
  measurementId: "G-TT56DM3MH8"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();

// Set language parameter for sign-in page if required
googleProvider.setCustomParameters({
  prompt: "select_account"
});

/**
 * Triggers standard Firebase Client SDK Google Sign-In popup
 */
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  
  // Compute initials
  let initials = "BH";
  if (user.displayName) {
    const parts = user.displayName.trim().split(" ");
    if (parts.length > 1) {
      initials = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    } else {
      initials = user.displayName.slice(0, 2).toUpperCase();
    }
  } else if (user.email) {
    initials = user.email.slice(0, 2).toUpperCase();
  }

  return {
    name: user.displayName || "Bella Hassan",
    email: user.email || "bellaoerhassan008@gmail.com",
    photoURL: user.photoURL || "",
    initials
  };
};

/**
 * Signs the user out from Firebase Auth
 */
export const logoutFromFirebase = async () => {
  await signOut(auth);
};
