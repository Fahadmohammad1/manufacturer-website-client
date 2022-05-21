// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXy-NhmvC-IXIZsbNXjaMrwiDzGftWHnk",
  authDomain: "mars-technology-630b3.firebaseapp.com",
  projectId: "mars-technology-630b3",
  storageBucket: "mars-technology-630b3.appspot.com",
  messagingSenderId: "159623725386",
  appId: "1:159623725386:web:d65ea0528d5d607cd701b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
