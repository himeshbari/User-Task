import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../action/userAction.js";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const error = useSelector((state) => state.user.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  if (isAuthenticated) {
    Navigate("/all-attendence");
    return null;
  }

  return (
    <div className=" d-flex justify-content-center align-items-center" style={{  height: "100vh", background: "#F2F8FF" }}>
      <div className="card px-5 py-4">
        <h4 className="card-title text-center mb-4" style={{ color: "#FE6777" }}>LOGIN</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your Username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary border-0 px-3" style={{ background: "#FE6777" }}>
              LOGIN
            </button>
          </div>
        </form>
        {error && (
          <div className="text-danger text-center mt-3">
            Please enter a valid username and password.
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginUser;
