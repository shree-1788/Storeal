import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Search from "./Search";

function createData(lab, config, name, productCategory, date, status) {
  return { lab, config, name, productCategory, date, status };
}

const rows = [
  createData(
    "401",
    "DMCE/COMP/C-401/20",
    "Dell-Monitor",
    "Electronics",
    "14/03/2022",
    "✅"
  ),
];

export default function BasicTable() {
  return (
    <>
      <div className="mt-2 d-flex justify-content-end">
        <div style={{ paddingRight: "100px" }}>
          <Search />
        </div>
        {/* <button className="btn-success btn m-2">Pdf</button> */}
        {/* <button className="btn-warning btn m-2">Csv</button> */}
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          style={{ marginTop: "10px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow className="border-2 border-dark">
              <TableCell>
                <b>Lab no.</b>
              </TableCell>
              <TableCell>
                <b>Configuration no.</b>
              </TableCell>
              <TableCell>
                <b>Product name</b>
              </TableCell>
              <TableCell>
                <b>Category</b>
              </TableCell>
              <TableCell>
                <b>Date</b>
              </TableCell>
              <TableCell>
                <b>Status</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="border-2 border-dark"
              >
                <TableCell component="th" scope="row">
                  {row.lab}
                </TableCell>
                <TableCell>{row.config}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.productCategory}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

// align="right"
// align="right"
// align="right"
// align="right"
// align="right"
