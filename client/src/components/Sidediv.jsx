import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Sidediv = ({name,ic}) => {
  const navigate = useNavigate();
  return (
    <Container v fluid style={{fontSize:"1.5rem"}} className='text-light mt-3 p-2 text-center  border-1'>
      <div className='d-flex justify-content-start' style={{cursor: "pointer"}} >
        
        <div>{ic}</div>
        <div className='m-2'> <h4  onClick={() => name === 'dashboard' ? navigate('/') : navigate(`/${name}`)}>{name}</h4></div>
        
     
      
      </div>
    </Container>
  )
}

export default Sidediv;