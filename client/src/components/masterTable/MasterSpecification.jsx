import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

function MasterSpecification() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [data1, setData1] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [specification, setSpecification] = useState([]);

  // API for fetching added spec and category below
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
    console.log(res);
  };

  useEffect(() => {
    fetchSpecification();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data);
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setData1({ ...data1, [name]: value });
    // console.log(data);
  };

  // API request for posting specification data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/api/specificationMaster/addSpecification";
    const jwtoken = localStorage.getItem("auth-token");
    const { category, specification } = data;
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

    console.log(res);
    if (response.status === 200) {
      window.alert("Successfully added");
      window.location.reload();
    } else {
      window.alert(res.message);
    }
  };

  // API for fetching product in drop down
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

  const fetchProduct1 = async () => {
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
    setProduct1(res);
    // console.log(res);
  };
  // useEffect(() => {
  //   fetchProduct();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <div className="container my-4 col col-sm-8">
        <h1>Specifications master table</h1>
        <div className="container add shadow p-3 mb-5 bg-body rounded">
          <form>
            <div className="mb-3">
              <select
                className="form-select"
                aria-label="Default select example"
                name="category"
                value={data.category}
                onChange={handleChange}
                onClick={fetchProduct}
              >
                <option selected>Select Category</option>
                {product.map((ele) => {
                  return <option key={ele._id}>{ele.category}</option>;
                })}
              </select>
              <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                Enter Specification
              </label>
              <input
                type="text"
                name="specification"
                value={data.specification}
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              Add
            </button>
          </form>
        </div>
        {/* <div className="container">
          <div className="d-flex justify-content-center col col-sm-6 mx-auto align-items-center text-center">
            
            <p className="mx-2">Select category</p>

            <select
              className="form-select"
              aria-label="Default select example"
              name="category"
              value={data.category}
              onChange={handleChange}
            >
              <option selected>Select Category</option>
              {product.map((ele) => {
                return <option key={ele._id}>{ele.category}</option>;
              })}
            </select>

            <FilterAltIcon className="mx-2" />
          </div>
        </div> */}
        <div className="d-flex bg-primary justify-content-around">
          <div>
            <select
              className="form-select mt-1"
              aria-label="Default select example"
              name="category"
              value={data1.category}
              onChange={handleChange1}
              onClick={fetchProduct1}
            >
              <option selected>Select Category</option>
              {product1.map((ele) => {
                return <option key={ele._id}>{ele.category}</option>;
              })}
            </select>
          </div>
          <div className="mx-2">
            <FilterAltIcon style={{ cursor: "pointer", height: "50" }} />
          </div>
        </div>

        <div className="mt-4 col col-sm-9 text-center mx-auto">
          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Category</th>
                <th scope="col">Specification</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(specification).map((ele) => {
                return (
                  <tr key={ele._id}>
                    {/* <th scope="row">1</th> */}
                    <td>{ele.category}</td>
                    <td>{ele.specification}</td>
                    <td>
                      <i className="fa fa-solid fa-circle-trash"></i>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <th scope="row">2</th>
                <td>RAM</td>
                <td>Crucial 12GB RAM DDR4</td>
                <td>
                  <i className="fa fa-solid fa-circle-trash"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Hard disk</td>
                <td colspan="2">Toshiba SSD 512GB</td>
                <td>
                  <i className="fa fa-solid fa-circle-trash"></i>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MasterSpecification;
