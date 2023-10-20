import React, { useEffect } from 'react';
import Nav from "../../components/Nav.js";
import { getUser } from '../../action/userAction.js';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

function GetUser() {
    const user = useSelector((state) => state.user.user.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div className="container-fluid dashboard" style={{height:"100vh"}}>
            <div className="row">
                <div className="col-lg-2 col-md-7 justify-content-center dash-position">
                    <Nav />
                </div>
                <div className="col-lg-10 col-md-6 my-5 w-50 dash margin" style={{ marginLeft: "32%" }}>
                    <div className="user-list">
                    <h4 className="title px-3 fs-3" style={{color:"#FE6777"}}>GET USER</h4>
                        {user && user.length > 0 ? (
                            <Table hover className="bg-white p-4 rounded-4 shadow">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Surname</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Department</th>
                                        <th>Designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((u, i) => (
                                        <tr key={u._id}>
                                            <td>{i + 1}</td>
                                            <td>{u.firstName}</td>
                                            <td>{u.surname}</td>
                                            <td>{u.username}</td>
                                            <td>{u.email}</td>
                                            <td>{u.department}</td>
                                            <td>{u.designation}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ) : (
                            <p>No users found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetUser;
