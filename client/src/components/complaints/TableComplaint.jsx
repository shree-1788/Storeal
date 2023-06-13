import React,{useState} from 'react'
import { Table } from 'react-bootstrap'
import Status from './Status'

const TableComplaint = () => {

    const [c, setC] = useState({});
    const handleChangedColor = (obj) => {
      if(obj.uni){
        setC(obj.color)
      }
           
            
    }
    
  return (
    <div >
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Complaint no.</th>
      <th>Lab no.</th>
      <th>Category/Sub-Category</th>
      <th>Machine No.</th>
      <th>Handling Incharge</th>
      <th>Level of Complaint</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className={c.color} id="a" >
      <td>#111243</td>
      <td>607</td>
      <td>Electronics/Monitor</td>
      <td>AM1-Cd</td>
      <td>Dr. Amol Pande</td>
      <td>L2</td>
      <td><Status onSaveColor={handleChangedColor} uni={false}/></td>
    </tr>
    <tr className={c.color}>
      <td>#123212</td>
      <td>401</td>
      <td>Electronics/Mouse</td>
      <td>Am2-Gf</td>
      <td>Dr. Amol Pande</td>
      <td>L1</td>
      <td><Status onSaveColor={handleChangedColor} className="y" /></td>
    </tr>
  </tbody>
</Table>
    
    </div>
  )
}

export default TableComplaint