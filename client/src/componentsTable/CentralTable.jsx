import React, { useEffect, useState, useRef } from "react";
import { Modal, Table } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EachRow from "./EachRow";
import ModalForCentralInventory from "./ModalForCentralInventory";
import ModalCentral from "./ModalCentral";

const CentralTable = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState({ id: "" });
  const ref = useRef(null);
  const openModal = (id) => {
    console.log(id);
    ref.current.click();
    setId(id);
  };

  const handleClick = () => {};

  const fetchInventory = async () => {
    const url = "/api/centralTable/getItem";
    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },
    });

    const res = await response.json();
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    fetchInventory();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Table striped bordered hover className="mt-2">
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
                      Items moved to lab
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="text"
                      id="number"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                      name="configurationNumber"
                      disabled
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
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <thead>
          <tr>
            <th>Bill No.</th>
            <th>Category</th>
            <th>Specification</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(data).map((ele) => {
            return (
              <tr key={ele._id}>
                <td>{ele.bill}</td>
                <td>{ele.category}</td>
                <td>{ele.specification}</td>
                <td
                  onClick={() => {
                    openModal(ele._id);
                  }}
                >
                  {ele.quantity}
                </td>
                <td>{ele.cost}</td>
                <td>{ele.date}</td>

                <td>
                  <EditIcon style={{ cursor: "pointer" }} />
                  <DeleteIcon />
                  <ModalCentral
                    cat={ele.category}
                    spec={ele.specification}
                    id={ele._id}
                  />
                </td>
              </tr>
            );
          })}
          {/* <tr> */}

          {/* <th> <button onClick={handleClick} className='btn btn-primary mx-3'>Move to Lab</button></div></th> */}
          {/* <th>
          <EditIcon /> <DeleteIcon />
          
        </th>
      </tr> */}
        </tbody>
      </Table>
    </>
  );
};

export default CentralTable;
