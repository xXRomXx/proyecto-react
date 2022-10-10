// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMpl0Vw-9rEhXdEA8lUlVP4uYEKYaFArk",
          authDomain: "fir-javascript-crud-6856d.firebaseapp.com",
          projectId: "fir-javascript-crud-6856d",
          storageBucket: "fir-javascript-crud-6856d.appspot.com",
          messagingSenderId: "195045187460",
          appId: "1:195045187460:web:ad2f894652a7dbdc0f87d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} nombre the title of the Task
 * @param {string} description the description of the Task
 * @param {string} amount the description of the Task
 * @param {string} imageURL the description of the Task
 */
export const saveTask = (nombre, description, amount,imageURL) =>
  addDoc(collection(db, "dishes"), { nombre, description,amount, imageURL });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "dishes"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "dishes", id));

export const getTask = (id) => getDoc(doc(db, "dishes", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "dishes", id), newFields);

export const getTasks = () => getDocs(collection(db, "dishes"));
