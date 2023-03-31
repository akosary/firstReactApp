import React, { useState } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBInputGroup,
} from "mdb-react-ui-kit";
export default function Student() {
  const [state, setStudents] = useState({
    students: [],
  });
  let [errors, setErrors] = useState({});
  let name = document.getElementById("name-input").value;
  let age = document.getElementById("age-input").value;

  const ageValidation = (e) => {
    if (!age) {
      setErrors({ ...errors, age: "Age is required" });
    } else if (age < 18) {
      setErrors({ ...errors, age: "Age must be >= 18 " });
    } else {
      setErrors({ ...errors, age: "" });
    }
  };

  const nameValidation = (e) => {
    if (!name) {
      setErrors({ ...errors, name: "name is required" });
    } else if (name.length < 3) {
      setErrors({
        ...errors,
        name: "name must be greater than 3 characters",
      });
    } else {
      setErrors({ ...errors, name: "" });
    }
  };
  let add = (e) => {
    e.preventDefault();
    if (name !== "" && age !== "" && !errors.name && !errors.age) {
      const newStudent = {
        id: state.students.length + 1,
        name,
        age,
      };
      setStudents({
        students: [...state.students, newStudent],
      });
      name = "";
      age = "";
    }
  };

  return (
    <div className="container my-5">
      <form
        className="border border-black border-3 rounded rounded-2 p-3"
        onSubmit={add}
      >
        <MDBInputGroup className="mb-3" size="lg" textBefore="Name">
          <input
            className="form-control "
            type="text"
            id="name-input"
            onChange={nameValidation}
          />
          {/* <div className="text-bg-danger d-none" id="nEmpty">
            You have to put your name
          </div> */}
          {errors.name && <div className="bg-danger">{errors.name}</div>}
        </MDBInputGroup>{" "}
        <MDBInputGroup className="mb-3" size="lg" textBefore="Age">
          <input
            className="form-control"
            type="text"
            id="age-input"
            onChange={ageValidation}
          />
          {errors.age && <div className="bg-danger">{errors.age}</div>}
          {/* <div className="text-bg-danger d-none">You have to put your age</div> */}
        </MDBInputGroup>{" "}
        <button className="btn btn-primary">Add</button>
      </form>
      <MDBTable
        striped
        className=" my-5 border border-black border-3 rounded rounded-2 p-5"
      >
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {state.students.map((student, index) => {
            return (
              <tr key={index}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
