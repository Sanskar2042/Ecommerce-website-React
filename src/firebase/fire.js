import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHoXlp2sllQGWhGLXWr8uqpoKkJFTxrYg",
  authDomain: "ecommerce-react-29c30.firebaseapp.com",
  projectId: "ecommerce-react-29c30",
  storageBucket: "ecommerce-react-29c30.appspot.com",
  messagingSenderId: "501256160458",
  appId: "1:501256160458:web:861be6c8c439205ba1a033",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
