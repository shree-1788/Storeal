import React from 'react'


const ShowAddedElement = (props) => {


    
  return (
    <>
    {/* <div className='d-flex justify-content-center'>
        <p style={{padding: "10px"}}>{props.enteredLabs}</p>
        <p style={{padding: "10px"}}>{props.enteredMachine}</p>
        <p style={{padding: "10px"}}>{props.enteredCategory}</p>
        <p style={{padding: "10px"}}>{props.enteredSubCategory}</p>
        </div> */}
        
        
    <tr className='border border-dark' >
      <td>{props.enteredLabs}</td>
      <td>{props.enteredMachine}</td>
      <td>{props.enteredCategory}</td>
      <td>{props.enteredSubCategory}</td>
    </tr>
   
    
       
    </>
  )
}

export default ShowAddedElement