import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from "../../components/Nav.js";
import { getLocation } from '../../action/locationAction.js'; // Import the getLocation action
import { Table } from 'react-bootstrap';

function GetLocations() {
  const locations = useSelector((state) => state.location.location.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  return (
    <div className="container-fluid dashboard" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-lg-2 col-md-7 justify-content-center dash-position">
          <Nav />
        </div>
        <div className="col-lg-10 col-md-6 my-5 w-50 dash margin" style={{ marginLeft: "32%" }}>
          <div className="user-list">
            <h4 className="title px-3 fs-3" style={{ color: "#FE6777" }}>GET LOCATIONS</h4>
            {locations && locations.length > 0 ? (
              <Table hover className="bg-white p-4 rounded-4 shadow">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Location Name</th>
                    <th>Location Code</th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((location, i) => (
                    <tr key={location._id}>
                      <td>{i + 1}</td>
                      <td>{location.locationName}</td>
                      <td>{location.locationCode}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>No locations found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetLocations;
