import React from "react";
import { Table } from "react-bootstrap";
import RequestTable from "../components/request/RequestTable";

const CentralRequest = () => {
  return (
    <>
      <RequestTable />
      {/* <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th>Date</th>
            <th>Lab</th>
            <th>Product Name</th>
            <th>Specification</th>
            <th>Required Quantity</th>
            <th>Received Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>21/03/2022</td>
            <td>401</td>
            <td>Monitor</td>
            <td>HP</td>
            <td>3</td>

            <td>
              <select className="form-select" name="lab">
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>02/03/2022</td>
            <td>605</td>
            <td>CPU</td>
            <td>Circle</td>
            <td>1</td>

            <td>
              <select className="form-select" name="lab">
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>17/03/2022</td>
            <td>509</td>
            <td>Mouse</td>
            <td>Dell</td>
            <td>10</td>

            <td>
              <select className="form-select" name="lab">
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </td>
          </tr>
        </tbody>
      </Table> */}
    </>
  );
};

export default CentralRequest;
