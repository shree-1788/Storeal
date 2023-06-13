import React, { useState, useEffect } from "react";
import RequestTable from "./RequestTable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Request = () => {
  // const [data,setData] = useState();

  const [lab, setLab] = useState({ lab: "" });
  const [inputData, setInputData] = useState({
    category: "",
    specification: "",
    lab: localStorage.getItem("lab"),
    requiredQuantity: "",
    date: "",
  });

  const getLab = async () => {
    const url = "/api/auth/getLab";
    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },
    });

    const res = await response.json();
    setLab(res);
    localStorage.setItem("lab", res.lab);
    console.log(res);
  };

  useEffect(() => {
    getLab();
  }, []);

  const handleStockCheck = async (e) => {
    e.preventDefault();
    const url = "/api/centralTable/getQuantity";
    const jwtoken = localStorage.getItem("auth-token");
    const { category, specification } = inputData;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },

      body: JSON.stringify({
        category,
        specification,
      }),
    });

    const res = await response.json();
    // console.log(res);
    if (response.status === 200) {
      window.alert(`Product exist, Available Quantity ${res.quantity}`);
    } else {
      window.alert(res.message);
    }
  };

  const [product, setProduct] = useState([]);
  const [specification, setSpecification] = useState([]);

  const fetchSpecification = async () => {
    const url = "/api/specificationMaster/getSpecification";

    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },
    });

    const res = await response.json();
    setSpecification(res);
    // console.log(res);
  };

  useEffect(() => {
    fetchSpecification();
    // eslint-disable-next-line
  }, []);
  const fetchProduct = async () => {
    const url = "/api/productMaster/getCategory";

    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },
    });

    const res = await response.json();
    setProduct(res);
    // console.log(res);
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");
    const url = "/api/request/generateRequest";
    const jwtoken = localStorage.getItem("auth-token");
    const { category, specification, lab, requiredQuantity, date } = inputData;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },

      body: JSON.stringify({
        category,
        specification,
        lab,
        requiredQuantity,
        date,
      }),
    });

    const res = await response.json();

    console.log(res);
    if (response.status === 200) {
      window.alert("Successfully added");
      window.location.reload();
      setInputData({});
    } else {
      window.alert(res.message);
    }
  };

  // const handleStockCheck = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <form>
        <fieldset>
          <div className="container">
            <h2>Request form</h2>
            <div className="row">
              <div className="mb-3 mt-4 col col-sm-5">
                <label for="disabledTextInput" className="form-label">
                  <h4>Product</h4>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="category"
                  value={inputData.category}
                  onChange={handleChange}
                >
                  <option selected>Select Category</option>
                  {product.map((ele) => {
                    return <option key={ele._id}>{ele.category}</option>;
                  })}
                </select>
              </div>
              <div className="mb-3 mt-4 col col-sm-5">
                <label for="disabledTextInput" className="form-label">
                  <h4>Specification</h4>
                </label>
                <select
                  type="text"
                  aria-label="Default select example"
                  className="form-select"
                  placeholder="Enter Specification"
                  name="specification"
                  value={inputData.specification}
                  onChange={handleChange}
                >
                  <option selected>Select Specification</option>
                  {specification.map((ele) => {
                    return <option key={ele._id}>{ele.specification}</option>;
                  })}
                </select>
                {/* <input
                required
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Enter Specification"
                name="specification"
                value={inputData.specification}
                onChange={handleChange}
              /> */}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col col-sm-3">
                <button
                  onClick={handleStockCheck}
                  type="submit"
                  className="btn btn-warning btn-md "
                >
                  Check Stock
                </button>
              </div>
              {/* <div className="col col-sm-6">
                <h4>This much quantity is in stock</h4>
              </div> */}
            </div>
            <div className="row mt-4">
              <div className="mb-3 col col-sm-5">
                <label for="disabledSelect" className="form-label">
                  <h4>Lab</h4>
                </label>
                <select
                  required
                  id="disabledSelect"
                  className="form-select"
                  value={lab.lab}
                  disabled
                >
                  <option>{lab.lab}</option>
                </select>
              </div>
              <div class="mb-3 col col-sm-5">
                <label for="disabledTextInput" className="form-label">
                  <h4>Quantity</h4>
                </label>
                <input
                  required
                  type="number"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Enter Qunatity"
                  name="requiredQuantity"
                  value={inputData.requiredQuantity}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-sm-5">
                <label for="date" class="col-1 col-form-label">
                  <h4>Date</h4>
                </label>
                <div class="col-5">
                  <div class="input-group date">
                    <input
                      type="date"
                      class="form-control"
                      id="date"
                      onChange={handleChange}
                      name="date"
                      value={inputData.date}
                    />
                    <span class="input-group-append">
                      {/* <span class="input-group-text bg-light d-block"> */}
                      {/* <CalendarMonthIcon /> */}
                      {/* </span> */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col col-sm-5 mt-4">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary btn-md "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
      <RequestTable />
    </>
  );
};

export default Request;
