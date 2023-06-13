import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const RequestTable = () => {
  const [data, setData] = useState([]);

  // Request Table API
  const fetchRequest = async () => {
    const url = "/api/request/getRequest";

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
    fetchRequest();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {" "}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            {/* <th>SR no.</th> */}
            <th>Bill no.</th>
            <th>Date</th>
            <th>Lab</th>
            <th>Product Name</th>
            <th>Specification</th>
            <th>Quantity Required</th>
            <th>Quantity Received</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr key={ele._id}>
                <td>{ele.bill}</td>
                <td>{ele.date}</td>
                <td>{ele.lab}</td>
                <td>{ele.category}</td>
                <td>{ele.specification}</td>
                <td>{ele.requiredQuantity}</td>
                <td>{ele.recievedQuantity}</td>

                <td>
                  <select className="form-select" name="lab">
                    <option>{ele.status}</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default RequestTable;
