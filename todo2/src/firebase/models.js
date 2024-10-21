import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseApp } from "../firebase/app.js";

// create fireStore database

const database = getFirestore(firebaseApp);

/**
 * Get All Students Data From FireStore Database
 */

export const getAllStudents = async (colName) => {
  // get all students data
  const students = await getDocs(collection(database, colName));

  // process students data

  const studentsDataList = [];

  students.forEach((student) => {
    studentsDataList.push(student.data());
  });

  return studentsDataList;
};

/**
 * Get A Single Student Data From FireStore Database
 */

export const getASingleStudent = async (colName, id) => {
  // get a single student data
  const student = await getDoc(doc(database, colName, id));

  //   return student data
  return student.data();
};

/**
 * Delete A Single Student Data From FireStore Database
 */

export const getDeleteAStudent = async (colName, id) => {
  // delete a single student data
  const deleteAStudent = await deleteDoc(doc(database, colName, id));

  //   return student data
  return deleteAStudent.data();
};

/**
 * Create A New Student Data For FireStore Database
 * docId  create with id
 * otherwise create with autoId
 */

export const createAStudent = async (colName, data, docId = null) => {
  // create a new student

  if (docId) {
    await setDoc(doc(database, colName, docId), data);
  } else {
    await addDoc(collection(database, colName), data);
  }
};

/**
 * Update A Student Data For FireStore Database
 */

export const updateAStudent = async (colName, id, data) => {
  // update a student
  await updateDoc(doc(database, colName, id), data);
};
