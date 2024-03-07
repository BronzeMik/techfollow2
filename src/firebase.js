// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMZIGXndUpIZYzY5aGy_v26pZ9XF9y0vM",
  authDomain: "tech-follow.firebaseapp.com",
  projectId: "tech-follow",
  storageBucket: "tech-follow.appspot.com",
  messagingSenderId: "806001603750",
  appId: "1:806001603750:web:5ffe01acc667eb1d3ff067",
  measurementId: "G-Q9YTYZLJRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
