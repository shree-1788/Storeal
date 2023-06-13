import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Dashmodal from "../Dashmodal";
import AddInventoryDropdown from "./AddInventoryDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { InputGroup, FormControl } from "react-bootstrap";
import AddBox from "../displayinventory/AddBox";

import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {

    const [select, setSelect] = useState("");

    const handleChange = (event) => {

        const value = event.target.value;
        console.log(value);

    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Items</Modal.Title>
      </Modal.Header>
      
    
        <div>
        <Modal.Body>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Category</label>
                <input type="text" value={select} onChange={handleChange}/>
              </div>
            </form>
          </div>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}  className="btn-success " size="lg">
          Add
        </Button>
       

      </Modal.Footer>
      </div>
    </Modal>
  );
}





const FabsCopy = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <div className="d-flex justify-content-end">
      <Fab color="primary" aria-label="add" onClick={() => setModalShow(true)}>
        <AddIcon />
      </Fab>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default FabsCopy;

