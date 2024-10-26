// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getPerformance } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-performance.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3q_6u23Cv19qmXC_VAQyHUhljqcrtcAY",
  authDomain: "marwinwongjarupun.firebaseapp.com",
  projectId: "marwinwongjarupun",
  storageBucket: "marwinwongjarupun.appspot.com",
  messagingSenderId: "1066049890889",
  appId: "1:1066049890889:web:893e0cb09356ee5ce22d98",
  measurementId: "G-VJCQVS8X8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);