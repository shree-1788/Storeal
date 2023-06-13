import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function Registrations() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    role: "",
    lab: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, role, lab, phone, email, password, confirmPassword } = data;
    const url = "/api/auth/signup";
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        role,
        lab,
        phone,
        email,
        password,
        confirmPassword,
      }),
    });

    const res = await response.json();
    console.log(res);
    if (response.status === 200) {
      navigate("/login");
    } else {
      window.alert(res.message);
    }
  };

  const [Visibility, setVisibility] = useState("hidden");
  const handleClick = () => {
    if (Visibility === "visible") {
      setVisibility("hidden");
    } else {
      setVisibility("visible");
    }
  };
  return (
    <>
      <div className="container W-100 h-100">
        {/* main container */}
        <div className="row my-5 justify-content-md-center shadow p-3 mb-5 bg-body rounded">
          <div className="col col-sm-6">
            <div className="form">
              {/* form container */}
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={data.value}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Role" className="form-label">
                    Role
                  </label>
                  <select
                    type="text"
                    name="role"
                    value={data.role}
                    onChange={handleChange}
                    className="form-control"
                    id="Role"
                    aria-describedby="emailHelp"
                  >
                    <option value="Lab incharge">Lab Incharge</option>
                    <option value="Lab assistant">Lab Assistant</option>
                    <option value="Hod">Head of Department</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="lab" className="form-label">
                    Lab
                  </label>
                  <input
                    type="text"
                    name="lab"
                    value={data.lab}
                    onChange={handleChange}
                    className="form-control"
                    id="lab"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    className="form-control"
                    id="phone"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <div className="row">
                    <div className="col col-sm-11">
                      <input
                        type={Visibility === "visible" ? "text" : "password"}
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="col col-sm-1 align-items-center">
                      {Visibility === "hidden" ? (
                        <VisibilityIcon onClick={handleClick} />
                      ) : (
                        <VisibilityOffIcon onClick={handleClick} />
                      )}
                      {/* <i
                        className={
                          Visibility === "hidden"
                            ? "fa fa-solid fa-eye"
                            : "fa fa-solid fa-eye-slash"
                        }
                        onClick={handleClick}
                      ></i> */}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <div className="row">
                    <div className="col col-sm-12">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                </div>
                <button onClick={handleSignUp} className="btn btn-success">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="image">
              {/* image container */}
              <img
                src={process.env.PUBLIC_URL + "./images/signup.png"}
                alt="register"
                style={{ height: "55vh", width: "35vw" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrations;
