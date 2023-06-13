import React, { useState } from "react";
import AddElement from "./AddElement";
import CentralTable from "./CentralTable";
import { useNavigate } from "react-router-dom";

const DataTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const getDataFromForm = (getData) => {
  //   setData([...data, getData]);
  // };

  const handleClick = () => {
    navigate("/centralrequest");
  };
  return (
    <>
      <div className="d-flex justify-content-end mt-2">
        <button onClick={handleClick} className="btn btn-warning">
          Request
        </button>
      </div>
      <AddElement />
      <CentralTable />
    </>
  );
};

export default DataTable;
