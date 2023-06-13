import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidediv from "../components/Sidediv";
import Card from "../components/Card";
import ActionAreaCard from "../components/Card";
import Additem from "../components/Additem";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TableRowsIcon from "@mui/icons-material/TableRows";

const FixedDashboard = ({ component }) => {
  return (
    <Container fluid>
      <Row>
        <Col
          md={2}
          className="border border-dark bg-dark m-0 p-0"
          style={{ height: "100vh" }}
        >
          <Sidediv name="masterTable" ic={<PeopleIcon />}></Sidediv>
          <Sidediv name="centralTable" ic={<TableRowsIcon />}>
            {" "}
          </Sidediv>
          <Sidediv name="dashboard" ic={<AdminPanelSettingsIcon />}></Sidediv>
          {/* <Sidediv name="users" ic={<PeopleIcon/>}> </Sidediv> */}

          <Sidediv name="report" ic={<SummarizeIcon />}></Sidediv>
          <Sidediv name="scrap" ic={<SummarizeIcon />}></Sidediv>
          <Sidediv name="statistics" ic={<SummarizeIcon />}></Sidediv>

          {/* <Sidediv name="Category"></Sidediv>
        <Sidediv name="Profile"></Sidediv>

        <Sidediv name="Logout"></Sidediv> */}
        </Col>
        {/* <Col md={10} className="border border-dark" style={{backgroundColor: "#f8f8ff"}}>
        <div>
          <h1>Inventory Management System</h1>
        </div>
        <Row>
          <Col md={3} ><ActionAreaCard colour="#00C0EF"/></Col>
          <Col md={3} ><Card colour="#04A559"></Card></Col>
          <Col md={3} ><Card colour="#F39C12"></Card></Col>
          <Col md={3} ><Card colour="#DD4B39"></Card></Col>
        </Row>
        <Additem/>
      
       </Col> */}
        <Col>{component}</Col>
      </Row>
    </Container>
  );
};

export default FixedDashboard;

// <Card colour="#00C0EF"></Card>
