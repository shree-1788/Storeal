import React from "react";
import Dashboard from "../../pages/Dashboard";
import Sidediv from "../Sidediv";
import Card from "../Card";
import { Container, Row, Col } from "react-bootstrap";
import Zero from "./Zero";
import Fabs from "../cardAccessories/Fabs";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TableComplaint from "./TableComplaint";

const ComplaintDash = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            md={10}
            className="border border-dark mt-5 mx-auto"
            style={{ backgroundColor: "#f8f8ff" }}
          >
            <TableComplaint />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ComplaintDash;
