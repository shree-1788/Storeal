import React, {useState} from 'react'
import ShowAddedElement from './ShowAddedElement'
import { Table } from 'react-bootstrap'

const Data = (props) => {

  
  // const recievedData = props.filterData.map((x)=>{
  //   <ShowAddedElement 
  //   enteredLabs={x.enteredLabs}
  //   enteredMachine={x.enteredMachine}
  //   enteredCategory={x.enteredCategory}
  //   enteredSubCategory={x.enteredSubCategory}
  //   />
  // });

 




  return (
   <>
    <Table striped bordered hover className='mt-0'>
    <tbody>
    {props.items.map((x) => (
   
   <ShowAddedElement 
   enteredLabs={x.enteredLabs}
   enteredMachine={x.enteredMachine}
   enteredCategory={x.enteredCategory}
   enteredSubCategory={x.enteredSubCategory}
   />
)) }

    

  


  
    </tbody>
   </Table>
   </>
  )
}

export default Data