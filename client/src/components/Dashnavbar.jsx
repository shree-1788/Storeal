import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Dashnavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("lab");
    navigate("/login");
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className="d-flex justify-content-between">
          <div>
            <Navbar.Brand href="#home">
              <img
                src="https://storage.googleapis.com/ezap-prod/colleges/10479/datta-meghe-college-of-engineering-airoli-navi-mumbai-logo.jpg"
                alt=""
                height={60}
                width={60}
              />
            </Navbar.Brand>
          </div>
          <div>
            <h1>Inventory Management System</h1>
          </div>
          {/* <div>
              <Nav className="">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
            </div> */}
          {localStorage.getItem("auth-token") ? (
            <div className="d-flex" style={{ cursor: "pointer" }}>
              <LogoutIcon onClick={handleLogout} />
            </div>
          ) : (
            <div></div>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Dashnavbar;
