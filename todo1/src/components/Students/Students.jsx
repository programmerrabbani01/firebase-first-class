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
import { firebaseApp } from "../../firebase/app.js";

const Students = () => {
  // DATABASE CREATE
  const dataBase = getFirestore(firebaseApp);

  // make a function

  const getFireBaseData = async () => {
    // get all students
    // const data = await getDocs(collection(dataBase, "students"));

    // data.forEach((item) => {
    //   console.log(item.data());
    // });

    // get single student

    // const data = await getDoc(doc(dataBase, "students", "01"));

    // console.log(data.data());

    // create a student with auto id

    // await addDoc(collection(dataBase, "students"), {
    //   name: "Aman",
    //   age: 23,
    //   skill: "HTML Developer",
    // });

    // create a student with make id by myself

    // await setDoc(doc(dataBase, "students", "02"), {
    //   name: "Omor Faruk",
    //   age: 2,
    //   skill: "AI Developer",
    // });

    // delete a student

    // await deleteDoc(doc(dataBase, "students", "sFcKeFLDZmaLoAyRJXr2"));

    // update a student
    await updateDoc(doc(dataBase, "students", "01"), {
      skill: "Python Developer",
    });
  };

  // call the function
  getFireBaseData();

  return <div>Students</div>;
};

export default Students;
