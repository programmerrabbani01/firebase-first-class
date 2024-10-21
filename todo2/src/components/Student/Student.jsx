import {
  createAStudent,
  getAllStudents,
  getASingleStudent,
  getDeleteAStudent,
  updateAStudent,
} from "../../firebase/models.js";

const Student = () => {
  // make a function

  const getFireBaseData = async () => {
    // get all students
    // const students = await getAllStudents("students");
    // console.log(students);
    // ************************
    // get single student
    // const student = await getASingleStudent("students", "01");
    // console.log(student);
    // ************************
    // create a student with id
    // await createAStudent(
    //   "students",
    //   {
    //     name: "Abu Bakar",
    //     age: 23,
    //     skill: "Dhaka",
    //   },
    //   "03"
    // );
    // create a student with auto generated id
    // await createAStudent("students", {
    //   name: "Abu",
    //   age: 36,
    //   skill: "HTML Developer",
    // });
    // ************************
    // delete a student
    // await getDeleteAStudent("students", "03");
    // ************************
    // update a student
    // await updateAStudent("students", "03", { skill: "CSS Developer" });
  };

  //   call the function
  getFireBaseData();

  return <div>Student</div>;
};

export default Student;
