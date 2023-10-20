import React, { useState } from "react";
// import "../../src/styles/AuthStyles.css";
import Nav from "../../components/Nav.js";
import {  addUser } from '../../action/userAction.js'; // Rename the import
import { useDispatch, useSelector } from 'react-redux';

const AddUser = () => { // Rename the component
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    username: '',
    department: '',
    designation: '',
    password: '',
    locationId: '',
    userId: '',
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.userState);
  console.log(state)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(formData)); // Use the renamed action
    setFormData({
      firstName: '',
      surname: '',
      email: '',
      username: '',
      department: '',
      designation: '',
      password: '',
      locationId: '',
      userId: '',
    });
    alert("User successfully added!");
  };

  return (
    <>
      <div className="container-fluid dashboard ">
        <div className="row ">
          <div className="col-lg-2 col-md-7 justify-content-center dash-position">
            <Nav />
          </div>
          <div
            className="col-lg-10 col-md-6 my-5 w-50 dash margin"
            style={{ marginLeft: "32%" }}
          >
            {/* <h1 className="text-center mt-5 fst-italic text-white bgcolor-2 py-4">REGISTER FORM</h1>    */}
            <div
              className="form-container user-form"
             
            >
               <form onSubmit={handleSubmit}>
              <h4 className="title px-3 fs-3" style={{color:"#FE6777"}}>ADD USER</h4>
              <div className="bg-white p-4 rounded-4 shadow">
              <div className="row">
                <div className="col-md-4 p-2 p-2">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name :</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <div className="form-group">
                    <label htmlFor="surname">Surname :</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter surname"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 p-2">
                  <div className="form-group">
                    <label htmlFor="username">Username :</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <div className="form-group">
                    <label htmlFor="department">Department :</label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter department"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <div className="form-group">
                    <label htmlFor="designation">Designation :</label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter designation"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 p-2">
                  <div className="form-group">
                    <label htmlFor="password">Password :</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <div className="form-group">
                    <label htmlFor="userId">User ID :</label>
                    <input
                      type="number"
                      id="userId"
                      name="userId"
                      value={formData.userId}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter user ID"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <div className="form-group">
                    <label htmlFor="locationId">Location ID :</label>
                    <input
                      type="text"
                      id="locationId"
                      name="locationId"
                      value={formData.locationId}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter location ID"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="text-end">
              <button type="submit" className="btn btn-primary mt-3 px-5 border-0" style={{background:"#FE6777"}}>
                Submit
              </button>
              </div>
              </div>

            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
