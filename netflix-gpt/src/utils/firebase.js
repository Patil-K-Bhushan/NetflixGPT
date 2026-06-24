// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7IpJtG_Vsv7kqPtdCmYUJ8D9Tab8zhjg",
  authDomain: "netflixgpt-98a43.firebaseapp.com",
  projectId: "netflixgpt-98a43",
  storageBucket: "netflixgpt-98a43.firebasestorage.app",
  messagingSenderId: "975956543465",
  appId: "1:975956543465:web:e47223bdb65038a2b22d78",
  measurementId: "G-P2E944FT1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();