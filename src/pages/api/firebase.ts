
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAadUXf00MyK699EWfzk4S9TYJrtWLANMs",
  authDomain: "newsletter-prog-epf.firebaseapp.com",
  projectId: "newsletter-prog-epf",
  storageBucket: "newsletter-prog-epf.appspot.com",
  messagingSenderId: "1011339435691",
  appId: "1:1011339435691:web:4c4851d6d4801a7cd921ee",
  measurementId: "G-6BK6RHDHDK"
};

const app = initializeApp(firebaseConfig);

export default app;