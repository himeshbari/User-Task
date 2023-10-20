import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/User/addUser";
import UserList from "./pages/User/getUser";
import CreateLocation from "./pages/Location/addLocation";
import LocationList from "./pages/Location/getLocation";
import AttendenceList from "./pages/Attendence/allAttendence";
import UserLogin from "./pages/User/login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/add-user" element={<CreateUser/>}/>
          <Route path="/get-user" element={<UserList/>}/>
          <Route path="/add-Location" element={<CreateLocation/>}/>
          <Route path="/get-Location" element={<LocationList/>}/>
          <Route path="/all-attendence" element={<AttendenceList/>}/>
          <Route path="/" element={<UserLogin/>}/>





          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
