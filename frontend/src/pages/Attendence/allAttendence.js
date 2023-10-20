import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/Nav.js";
import { getLocation } from "../../action/locationAction.js";
import { getAttendence } from "../../action/attendenceAction.js";
import { Form, Button } from "react-bootstrap";

function GetAttendence() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [locationId, setLocationId] = useState("");

  const attendance = useSelector(
    (state) => state.attendence.attendance?.data || []
  );
  const error = useSelector((state) => state.attendence.error);

  const handleGetAttendance = () => {
    dispatch(getAttendence({ fromDate, toDate, locationId }));
  };

  const dispatch = useDispatch();

  const location = useSelector((state) => state?.location?.location?.data);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  const generateDateArray = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const dateArray = [];

    while (startDate <= endDate) {
      dateArray.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return dateArray;
  };

  const dateColumns = generateDateArray();

  return (
    <>
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-lg-2 col-md-7 justify-content-center dash-position">
            <Nav />
          </div>
          <div
            className="col-lg-10 col-md-6  dash w-75 margin"
            style={{ marginLeft: "20%" }}
          >
            <h4 className="title px-3 fs-3" style={{ color: "#FE6777" }}>
              GET ATTENDANCE
            </h4>

            <Form className="d-flex ">
              <div className="w-100">
                <Form.Group className="mx-3 ">
                  <Form.Label htmlFor="fromDate">From Date:</Form.Label>
                  <Form.Control
                    type="date"
                    id="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mx-3">
                  <Form.Label htmlFor="toDate">To Date:</Form.Label>
                  <Form.Control
                    type="date"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mx-3">
                  <Form.Label htmlFor="locationId">Location:</Form.Label>
                  <Form.Control
                    as="select"
                    id="locationId"
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)}
                  >
                    {location?.map((l) => (
                      <option key={l._id} value={l._id}>
                        {l.locationName}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button
                  variant="primary"
                  className="mx-3 mt-3 border-0"
                  style={{ background: "#FE6777" }}
                  onClick={handleGetAttendance}
                >
                  Get Attendance
                </Button>
              </div>
            </Form>

            <div
              className="my-3 mx-1 p-2 rounded-4 shadow-sm"
              style={{ background: "white" }}
            >
              {error && <div className="error">{error}</div>}
              {
                <div className="w-100 px-0">
                  <table className="table table-bordered my-3">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col" className="hide">
                          User ID
                        </th>
                        <th scope="col">FullName</th>
                        <th scope="col">Location</th>
                        {dateColumns.map((date, i) => (
                          <th key={i} scope="col">
                            {date.toLocaleDateString()}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {attendance.map((u, i) => (
                        <tr key={u._id.userId}>
                          <td>{i + 1}</td>
                          <td className="hide">{u._id.userId}</td>
                          <td>{u._id.userFullName}</td>
                          <td>{u._id.Location}</td>

                          {dateColumns.map((date, j) => {
                            const dateStr = date.toLocaleDateString();
                            const aSts = u.userAttendance.find(
                              (a) =>
                                new Date(a.date).toLocaleDateString() ===
                                dateStr
                            );
                            return (
                              <td key={j}>
                                {aSts ? aSts.createdAs : "--"}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetAttendence;
