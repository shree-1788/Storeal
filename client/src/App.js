import Dashnavbar from "./components/Dashnavbar";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import FixedDashboard from "./pages/FixedDashboard";
import AdminDash from "./pages/AdminDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Additem from "./components/Additem";
import MainHeading from "./components/report/MainHeading";
import AddUserForm from "./components/userAdd/AddUserForm";
import ComplaintDash from "./components/complaints/ComplaintDash";
import CentralTable from "./componentsTable/CentralTable";
import AddElement from "./componentsTable/AddElement";
import DataTable from "./componentsTable/DataTable";
import Request from "./components/request/Request";
import CentralRequest from "./componentsTable/CentralRequest";
import MasterDashboard from "./components/masterTable/MasterDashboard";
import MasterStaff from "./components/masterTable/MasterStaff";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import MasterProduct from "./components/masterTable/MasterProduct";
import MasterSpecification from "./components/masterTable/MasterSpecification";
import Scrap from "./components/Scrap";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="App">
      <Router>
        <Dashnavbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route
            exact
            path="/centralTable"
            element={
              <FixedDashboard
                component={
                  <>
                    <DataTable />
                  </>
                }
              />
            }
          ></Route>
          <Route
            exact
            path="/masterTable"
            element={<FixedDashboard component={<MasterDashboard />} />}
          ></Route>
          <Route
            exact
            path="/report"
            element={<FixedDashboard component={<MainHeading />} />}
          ></Route>
          <Route
            exact
            path="/scrap"
            element={<FixedDashboard component={<Scrap />} />}
          ></Route>
          <Route
            exact
            path="/statistics"
            element={<FixedDashboard component={<Statistics />} />}
          ></Route>
          <Route
            exact
            path="/complaint"
            element={
              <FixedDashboard component={<ComplaintDash name="complaint" />} />
            }
          ></Route>
          <Route
            exact
            path="/request"
            element={<FixedDashboard component={<Request />} />}
          ></Route>
          <Route
            exact
            path="/centralrequest"
            element={<FixedDashboard component={<CentralRequest />} />}
          ></Route>
          <Route
            exact
            path="/masterCategory"
            element={<FixedDashboard component={<MasterProduct />} />}
          ></Route>
          <Route
            exact
            path="/masterFaculty"
            element={<FixedDashboard component={<MasterStaff />} />}
          ></Route>
          <Route
            exact
            path="/masterSpecification"
            element={<FixedDashboard component={<MasterSpecification />} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
