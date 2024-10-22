import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOZnAO4tRro9Ool3vrkWWMzUqwlYIj7D8",
  authDomain: "airoutdoors-d3663.firebaseapp.com",
  projectId: "airoutdoors-d3663",
  storageBucket: "airoutdoors-d3663.appspot.com",
  messagingSenderId: "728058059109",
  appId: "1:728058059109:web:your-app-id",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
