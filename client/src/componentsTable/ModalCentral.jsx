import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputGroup } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import LabDropDown from "./FormContents/LabDropDown";
import CategoryDropDown from "./FormContents/CategoryDropDown";

function MyVerticallyCenteredModal(props) {
  const [inputData, setInputData] = useState({
    lab: "",
    category: props.cat,
    specification: props.spec,
  });

  const handleLabValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (id) => {
    // e.preventDefault();
    console.log(id);
    try {
      const url = `/api/centralTable/moveToLab/${id}`;
      const jwtoken = localStorage.getItem("auth-token");
      const { lab, category, specification } = inputData;
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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form>
            <div>
              <div className="d-flex justify-content-around">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="lab"
                  value={inputData.lab}
                  onChange={handleLabValue}
                >
                  <option selected>Select Lab</option>
                  <option selected>401</option>
                  <option selected>402</option>
                  <option selected>403</option>
                  <option selected>404</option>
                  <option selected>601</option>
                  <option selected>602</option>
                  <option selected>603</option>
                  <option selected>604</option>
                  <option selected>605</option>
                </select>
              </div>
              <br />
              <div className="d-flex justify-content-around">
                <div>
                  <Form.Group className="mb-3 d-flex">
                    <Form.Label>Category:</Form.Label>
                    <Form.Control value={props.cat} disabled />
                  </Form.Group>
                </div>
                <div>
                  <Form.Label>Specification:</Form.Label>
                  <Form.Control value={props.spec} disabled />
                </div>
              </div>
            </div>

            <Button
              // onClick={props.onHide}
              onClick={() => handleSubmit(props.id)}
              className="btn-success "
              size="lg"
            >
              Add
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
// as="textarea" aria-label="With textarea"

function ModalCentral(props) {
  const [modalShow, setModalShow] = React.useState(false);

  console.log(props);

  return (
    <>
      <Button
        className="mx-3"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Move to Lab
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cat={props.cat}
        spec={props.spec}
        id={props.id}
      />
    </>
  );
}

export default ModalCentral;
