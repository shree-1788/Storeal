import React, { useState } from "react";
import { Form } from "react-bootstrap";
import TableComplaint from "./TableComplaint";

const Status = (props) => {
  const [val, setVal] = useState();
  const uni = props.uni;
  const handleChange = (event) => {
    const { value } = event.target;
    setVal(value);
    const obj = {
      color: "",
      uni
    }
    switch (value) {
      case "Working":
        obj.color = "table-warning";
        obj.uni = true;
        props.onSaveColor(obj);
        break;
      case "Done":
        props.onSaveColor("table-success");
        break;
      case "Rejected":
        props.onSaveColor("table-danger");
        break;
      case "Status":
        props.onSaveColor("#f8f8ff");
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Form.Select value={val} onChange={handleChange}>
        <option>Status</option>
        <option value="Working">Working</option>
        <option value="Done">Done</option>
        <option value="Rejected">Rejected</option>
      </Form.Select>
    </div>
  );
};

export default Status;
