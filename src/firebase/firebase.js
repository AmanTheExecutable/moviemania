import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyD8JSAn5l5iKhnzTN2O_tdjRGCZ6OoCywo",
	authDomain: "moviemania-1c764.firebaseapp.com",
	projectId: "moviemania-1c764",
	storageBucket: "moviemania-1c764.appspot.com",
	messagingSenderId: "692009244848",
	appId: "1:692009244848:web:66e37577eafe80a38dc375",
	measurementId: "G-6N1CLFHNN0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
