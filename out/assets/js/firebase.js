// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getPerformance } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-performance.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGMA88fUw3tRvw-IPaZn6aoG6GfxevUDM",
  authDomain: "marwinwongjarupun.dev",
  databaseURL: "https://virtual-folio-212c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "virtual-folio-212c2",
  storageBucket: "virtual-folio-212c2.appspot.com",
  messagingSenderId: "243149484747",
  appId: "1:243149484747:web:160e963951e2ae025ea14e",
  measurementId: "G-F4YG2QY3CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);