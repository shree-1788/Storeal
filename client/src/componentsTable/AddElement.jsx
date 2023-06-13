import { inputAdornmentClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const AddElement = (props) => {
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
  const [elementData, setElementData] = useState({
    bill: "",
    category: "",
    specification: "",
    quantity: "",
    cost: "",
    date: "",
  });
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setElementData({ ...elementData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "/api/centralTable/addItem";
    const { bill, category, specification, quantity, cost, date } = elementData;
    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },

      body: JSON.stringify({
        bill,
        category,
        specification,
        quantity,
        cost,
        date,
      }),
    });

    const res = await response.json();
    console.log(res);
    if (response.status === 200) {
      window.alert("Added Success");
      window.location.reload();
      // <Alert />
    } else {
      window.alert(res.message);
    }
  };

  return (
    <div className="mt-5 border border-2 border-dark px-5">
      <form action="post" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between">
          <div class="input-group m-3 ">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Bill No.:
              </span>
            </div>
            <input
              required
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="bill"
              value={elementData.bill}
              onChange={handleChange}
            />
          </div>
          <div class="input-group m-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Category:
              </span>
            </div>
            <select
              required
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="category"
              value={elementData.category}
              onChange={handleChange}
            >
              <option selected>Select Category</option>
              {product.map((ele) => {
                return <option key={ele._id}>{ele.category}</option>;
              })}
            </select>
          </div>
          <div class="input-group m-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Specification::
              </span>
            </div>
            <select
              required
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="specification"
              value={elementData.specification}
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
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="name"
              value={elementData.name}
              onChange={handleChange} */}
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div class="input-group m-3 ">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Quantity:
              </span>
            </div>
            <input
              required
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="quantity"
              value={elementData.quantity}
              onChange={handleChange}
            />
          </div>

          <div class="input-group m-3  ">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Cost:
              </span>
            </div>
            <input
              required
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="cost"
              value={elementData.cost}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-5">
            <label for="date" class="col-1 col-form-label">
              Date
            </label>
            <div class="col-5">
              <div class="input-group date">
                <input
                  onChange={handleChange}
                  name="date"
                  value={elementData.date}
                  type="date"
                  class="form-control"
                  id="date"
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
            <Button type="submit" className="btn-success  m-3">
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddElement;
