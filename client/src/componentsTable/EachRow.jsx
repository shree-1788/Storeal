import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalCentral from "./ModalCentral";

const EachRow = (props) => {
  const dt = new Date();
  const productName = props.dt.name;

  return (
    <>
      <tr>
        <td>{props.dt.category}</td>
        <td>{props.dt.name}</td>
        <td>{props.dt.quantity}</td>
        <td>{props.dt.cost}</td>
        <td>
          {dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear()}
        </td>

        {/* <th> <button onClick={handleClick} className='btn btn-primary mx-3'>Move to Lab</button></div></th> */}
        <th>
          <EditIcon /> <DeleteIcon />
          <ModalCentral name={productName} />
        </th>
      </tr>
    </>
  );
};

export default EachRow;
