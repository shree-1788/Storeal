import React, {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const LabDropDown = (props) => {

    const [lab, setLab] =useState();
    const handleChange = (e) => {
        const value = e.target.value;
        setLab(value);
        props.getValue(value);

    }

  return (
    <>
    <div className='d-flex'>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">Labs</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Lab"
          value={lab}
          onChange={handleChange}
        >
          <MenuItem value="401">401</MenuItem>
          <MenuItem value="402">402</MenuItem>
          <MenuItem value="403">403</MenuItem>
          <MenuItem value="404">404</MenuItem>
        </Select>
       
      </FormControl>
     
    </div>
    </>
  )
}

export default LabDropDown