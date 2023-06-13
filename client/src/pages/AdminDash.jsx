import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ActionAreaCard from "../components/Card";
import Additem from "../components/Additem";
import Card from "../components/Card"
import { Fab } from '@mui/material';

const AdminDash = () => {
  return (
    <>
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
    </>
  
  )
}

export default AdminDash;