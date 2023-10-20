import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Nav from "../../components/Nav.js";
import { addLocation } from '../../action/locationAction.js';

const AddLocation = () => {
  const [formData, setFormData] = useState({
    locationName: '',
    locationCode: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addLocation(formData)); // Dispatch the addLocation action
    setFormData({
      locationName: '',
      locationCode: '',
    });
    alert('Location successfully added!');
  };

  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <div className="col-lg-2 col-md-7 justify-content-center dash-position">
          <Nav />
        </div>
        <div className="col-lg-10 col-md-6 my-5 w-50 dash margin" style={{ marginLeft: "32%" }}>
          <div className="form-container user-form" style={{  }}>
            <h4 className="title px-3 fs-3" style={{ color: "#FE6777" }}>ADD LOCATION</h4>
            <div className="bg-white p-4 rounded-4 shadow">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 p-2">
                    <div className="form-group">
                      <label htmlFor="locationName">Location Name:</label>
                      <input
                        type="text"
                        id="locationName"
                        name="locationName"
                        value={formData.locationName}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter location name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 p-2">
                    <div className="form-group">
                      <label htmlFor="locationCode">Location Code:</label>
                      <input
                        type="text"
                        id="locationCode"
                        name="locationCode"
                        value={formData.locationCode}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter location code"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary mt-3 px-5 border-0" style={{ background: "#FE6777" }}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLocation;
