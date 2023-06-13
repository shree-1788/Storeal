import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    const url = "/api/auth/login";
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const res = await response.json();
    console.log(res);
    if (response.status === 200) {
      navigate("/");
      localStorage.setItem("auth-token", res.authToken);
      window.location.reload();
    } else {
      window.alert(res.message);
    }
  };

  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="container W-100 h-100">
        {/* main container */}
        <div className="row my-5 justify-content-md-center shadow p-2 mb-5 bg-body rounded">
          <div className="col col-sm-5">
            <div className="form mt-4">
              {/* Form container */}
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={data.email}
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                    value={data.password}
                    name="password"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="btn btn-primary d-block mb-1"
                >
                  Existing User Login
                </button>

                <button onClick={handleSignUp} className="btn btn-success">
                  New User? Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="col col-sm-4">
            <div className="image">
              {/* image container */}
              <img
                src={process.env.PUBLIC_URL + "./images/login.png"}
                alt="login"
                style={{ height: "50vh", width: "35vw" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
