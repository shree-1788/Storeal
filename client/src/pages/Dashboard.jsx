import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Modal, Table } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import ModalCentral from "./ModalCentral";
import Fab from "@mui/material/Fab";
import Sidediv from "../components/Sidediv";
import Card from "../components/Card";
import ActionAreaCard from "../components/Card";
import Additem from "../components/Additem";
import Zero from "../components/complaints/Zero";
import AddSection from "../components/filter/AddSection";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Fabs from "../components/cardAccessories/Fabs";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddBox from "../components/displayinventory/AddBox";
import ComplaintDash from "../components/complaints/ComplaintDash";

import ShowAddedElement from "../components/cardAccessories/ShowAddedElement";
import Data from "../components/cardAccessories/Data";
import TableRowsIcon from "@mui/icons-material/TableRows";
import AddIcon from "@mui/icons-material/Add";
import { Navigate } from "react-router-dom";
import ModalCentral from "../componentsTable/ModalCentral";

const Dashboard = (props) => {
  const [addData, setAddData] = useState([]);
  const [data, setData] = useState([{ product: "", specification: "" }]);
  const [filteredData, setFilteredData] = useState({});
  const [lab, setLab] = useState("");
  const [data1, setData1] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [specification1, setSpecification1] = useState([]);
  const [update, setupdate] = useState({ configurationNumber: "" });
  const [id, setId] = useState({ id: "" });
  const [role, setrole] = useState({ role: "" });
  const [labNumber, labNumberSet] = useState("");

  const handleLab = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    labNumberSet({ ...labNumber, [name]: value });
  };

  const navigate = useNavigate();
  const ref = useRef(null);

  const openModal = (id) => {
    console.log(id);
    ref.current.click();
    setId(id);
  };

  const updateNote = async (id) => {
    console.log(id);
    try {
      // const lab = localStorage.getItem("lab");
      const url = `/api/items/updateItems/${id}`;
      const jwtoken = localStorage.getItem("auth-token");
      const { configurationNumber } = update;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": jwtoken,
        },
        body: JSON.stringify({ configurationNumber }),
      });
      const res = await response.json();
      console.log(res);
      if (response.status === 200) {
        window.alert("Successfully updated");
        handleDisplay(lab);
        setupdate({ configurationNumber: "" });
      } else {
        window.alert(res.message);
        handleDisplay(lab);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDataFromFabs = (data) => {
    setAddData((prevData) => {
      return [data, ...prevData];
    });
  };
  // const handleFilter = (filter) => {
  //   setFilteredData(filter);
  // };
  const handleClick = () => {
    window.location.reload();
  };

  const handleDelete = async (id, lab) => {
    try {
      // const lab = localStorage.getItem("lab");
      const url = `/api/items/deleteItems/${id}`;
      const jwtoken = localStorage.getItem("auth-token");
      // const { lab, category, specification } = inputData;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": jwtoken,
        },
      });
      const res = await response.json();
      console.log(res);
      if (response.status === 200) {
        window.alert("Successfully deleted");
        handleDisplay(lab);
      } else {
        window.alert(res.message);
        handleDisplay(lab);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const getlab = async () => {
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
    localStorage.setItem("lab", lab.lab);
    console.log(res);
  };

  const getRole = async () => {
    const url = "/api/auth/getRole";
    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },
    });

    const res = await response.json();
    setrole(res);
    console.log(res);
  };

  const handleDisplay = async () => {
    try {
      // window.location.reload();

      console.log("displaying");
      // const lab = localStorage.getItem("lab");
      const url = `/api/items/getItems`;
      const jwtoken = localStorage.getItem("auth-token");
      // const { labNumber } = labNumber;
      const { category, specification } = data1;
      console.log(lab, category, specification);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": jwtoken,
        },

        body: JSON.stringify({
          // labNumber,
          category,
          specification,
        }),
      });

      const res = await response.json();
      console.log("fdfgcgh", res);
      setData(res);
      setData1([]);
      // console.log(res);
      // if (response.status === 200) {
      //   window.alert("Successfully added");
      //   window.location.reload();
      // } else {
      //   window.alert(res.message);
      // }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData1({ ...data1, [name]: value });
    // console.log(data);
  };

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setupdate({ ...update, [name]: value });
  };

  useEffect(async () => {
    getlab();
    getRole();
    if (!localStorage.getItem("auth-token")) {
      navigate("/login");
    }
  }, []);
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
  useEffect(() => {
    fetchProduct1();
    handleDisplay();
    // eslint-disable-next-line
  }, []);

  const fetchSpecification1 = async () => {
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
    setSpecification1(res);
    // console.log(res);
  };
  useEffect(() => {
    fetchSpecification1();
    // eslint-disable-next-line
  }, []);

  return (
    <Container fluid>
      <button
        ref={ref}
        type="button"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Update configuration number
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="number" class="col-form-label">
                    Configuration Number
                  </label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    id="number"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                    name="configurationNumber"
                    value={update.configurationNumber}
                    onChange={handleUpdate}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  updateNote(id);
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Row>
        <Col
          md={2}
          className="border border-dark bg-dark m-0 p-0"
          style={{ height: "100vh" }}
        >
          <Sidediv name="masterTable" ic={<PeopleIcon />}></Sidediv>
          <Sidediv name="centralTable" ic={<TableRowsIcon />}></Sidediv>
          <Sidediv name="dashboard" ic={<AdminPanelSettingsIcon />}></Sidediv>
          {/* <Sidediv name="users" ic={<PeopleIcon />}></Sidediv> */}

          <Sidediv name="report" ic={<SummarizeIcon />}></Sidediv>
          <Sidediv name="scrap" ic={<SummarizeIcon />}></Sidediv>
          <Sidediv name="statistics" ic={<SummarizeIcon />}></Sidediv>

          {/* <Sidediv name="Category"></Sidediv>
        <Sidediv name="Profile"></Sidediv>

        <Sidediv name="Logout"></Sidediv> */}
        </Col>
        <Col
          md={10}
          className="border border-dark"
          style={{ backgroundColor: "#f8f8ff" }}
        >
          {/* <p className="mt-4">
            <b>Select Lab</b>
          </p> */}
          <div className="d-flex justify-content-around  mb-5 ">
            {/* <select id="disabledSelect" className="form-select" name="lab">
              <option>Labs</option>
              <option>401</option>
              <option>402</option>
              <option>403</option>
              <option>404</option>
            </select> */}
            <input
              id="lab"
              className="mt-2"
              type="text"
              name="labNumber"
              value={
                role.role === "Lab incharge" ? lab.lab : labNumber.labNumber
              }
              onChange={handleLab}
            />
            {/* <button
              className="btn btn-primary"
              id={lab.lab}
              onClick={() => handleDisplay(lab.lab)}
            >
              Display
            </button> */}

            {/* <button className="btn btn-primary">Submit</button> */}
          </div>
          <Row>
            <Col md={4}>
              <Card
                name="Add Inventory"
                com={
                  <Fabs labNumber={lab.lab} onGetSomeData={getDataFromFabs} />
                }
                colour="#00C0EF"
              />
            </Col>
            <Col md={4}>
              <Card
                name="Requests"
                com={
                  <div className="d-flex justify-content-end ">
                    <Fab color="warning" aria-label="add">
                      <AddIcon />
                    </Fab>
                  </div>
                }
                colour="#F39C12"
              ></Card>
            </Col>
            <Col md={4}>
              <Card name="Complaints" com={<Zero />} colour="#04A559"></Card>
            </Col>

            {/* <Col md={3}>
              <Card colour="#DD4B39"></Card>
            </Col> */}
          </Row>
          {/* <AddSection onChangeFilter={handleFilter} items={addData} />
          <Data items={addData} /> */}
          <div className="d-flex bg-primary justify-content-around mt-5">
            <div>
              <select
                className="form-select mt-1"
                aria-label="Default select example"
                name="category"
                value={data1.product}
                onChange={handleChange}
              >
                <option selected>Select Category</option>
                {product1.map((ele) => {
                  return <option key={ele._id}>{ele.category}</option>;
                })}
              </select>
            </div>
            <div>
              <select
                className="form-select mt-1"
                aria-label="Default select example"
                name="specification"
                value={data1.specification}
                onChange={handleChange}
              >
                <option selected>Select Specification</option>
                {specification1.map((ele) => {
                  return <option key={ele._id}>{ele.specification}</option>;
                })}
              </select>
            </div>
            <div className="mx-2">
              <FilterAltIcon
                onClick={handleDisplay}
                style={{ cursor: "pointer", height: "50" }}
              />
            </div>
            <div className="mx-2">
              <button
                className="btn btn-warning mt-1"
                onClick={handleClick}
                style={{ cursor: "pointer", height: "50" }}
              >
                Remove Filters
              </button>
            </div>
          </div>
          <Table striped bordered hover className="mt-2">
            <thead>
              <tr>
                <th>Lab</th>
                <th>Category</th>
                <th>Specification</th>
                <th>Configuration Number</th>
                <th>Date</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {console.log("lab", labNumber.labNumber)}
              {lab.lab === "Not applicable" || role.role === "Lab assistant"
                ? data
                    .filter((e) => {
                      return e.lab === labNumber.labNumber;
                    })
                    .map((ele) => {
                      return (
                        <tr key={ele._id}>
                          <td>{ele.lab}</td>
                          <td>{ele.category}</td>
                          <td>{ele.specification}</td>

                          <td>{ele.configurationNumber}</td>
                          <td>{ele.date}</td>

                          <td>
                            <EditIcon
                              onClick={() => {
                                openModal(ele._id);
                              }}
                            />

                            {/* <ModalCentral
                        cat={ele.category}
                        spec={ele.specification}
                        id={ele._id}
                      /> */}
                            <DeleteIcon
                              onClick={() => handleDelete(ele._id, lab.lab)}
                            />
                            {/* <ModalCentral
                        cat={ele.category}
                        spec={ele.specification}
                        id={ele._id}
                      /> */}
                          </td>
                        </tr>
                      );
                    })
                : data
                    .filter((e) => {
                      return e.lab === lab.lab;
                    })
                    .map((ele) => {
                      return (
                        <tr key={ele._id}>
                          <td>{ele.lab}</td>
                          <td>{ele.category}</td>
                          <td>{ele.specification}</td>

                          <td>{ele.configurationNumber}</td>
                          <td>{ele.date}</td>

                          <td>
                            <EditIcon
                              onClick={() => {
                                openModal(ele._id);
                              }}
                            />

                            {/* <ModalCentral
                      cat={ele.category}
                      spec={ele.specification}
                      id={ele._id}
                    /> */}
                            <DeleteIcon
                              onClick={() => handleDelete(ele._id, lab.lab)}
                            />
                            {/* <ModalCentral
                      cat={ele.category}
                      spec={ele.specification}
                      id={ele._id}
                    /> */}
                          </td>
                        </tr>
                      );
                    })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
// filterData={filteredArray}

export default Dashboard;

// <Card colour="#00C0EF"></Card>

// lab no., machine no. , category, sub category, date
