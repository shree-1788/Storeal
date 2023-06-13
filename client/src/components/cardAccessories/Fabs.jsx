import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import Dashmodal from "../Dashmodal";
import AddInventoryDropdown from "./AddInventoryDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { InputGroup, FormControl } from "react-bootstrap";
import AddBox from "../displayinventory/AddBox";

import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [userInput, setUserInput] = useState({
    date: "",
    lab: localStorage.getItem("lab"),
    configurationNumber: "",
    category: "",
    specification: "",
  });

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
    console.log(res);
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
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/api/items/addItem";
    const { date, lab, configurationNumber, category, specification } =
      userInput;
    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },

      body: JSON.stringify({
        date,
        lab,
        configurationNumber,
        category,
        specification,
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
    <Modal
      {...props.labget}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mt-5 border border-2 border-dark px-5">
          <form action="post" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
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
                  value={userInput.category}
                  onChange={handleChange}
                >
                  <option selected>Select Category</option>
                  {Array.from(product).map((ele) => {
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
                  value={userInput.specification}
                  onChange={handleChange}
                >
                  <option selected>Select Specification</option>
                  {Array.from(specification).map((ele) => {
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
            <div></div>
            <div className="d-flex justify-content-between">
              <div class="input-group m-3 ">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Configuration Number:
                  </span>
                </div>
                <input
                  required
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  name="configurationNumber"
                  value={userInput.configurationNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col col-sm-5">
                <label for="disabledSelect" className="form-label">
                  <h4>Lab</h4>
                </label>
                <select
                  required
                  id="disabledSelect"
                  className="form-select"
                  name="lab"
                  // value={props.labget}
                  disabled
                >
                  <option>{props.labget}</option>
                </select>

                {/* <input type="text" value={props.labget} disabled /> */}
              </div>

              <div className="col col-sm-5">
                <label for="date" class="col-1 col-form-label">
                  Date
                </label>
                <div class="col-5">
                  <div class="input-group date">
                    <input
                      onChange={handleChange}
                      name="date"
                      value={userInput.date}
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
            </div>

            <div className="col col-sm-5 mt-4">
              <Button
                type="submit"
                onClick={props.onHide}
                size="lg"
                className="btn-success  m-3"
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const Fabs = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const handleData = (data) => {
    props.onGetSomeData(data);
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setModalShow(true)}
        >
          <AddIcon />
        </Fab>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onGetData={handleData}
        labget={props.labNumber}
      />
    </>
  );
};

export default Fabs;
