import React,{useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CategoryDropdown = (props) => {
    const [category, setCategory] = useState("");
    const handleChange = (event) => {
      const {value} = event.target;
        setCategory(event.target.value);
        props.onGetCategory(value);
      };
  return (

 
    <div className='d-flex'>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="Lab"
          onChange={handleChange}
        >
            <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Stationary">Stationary</MenuItem>
          
        </Select>
       
      </FormControl>
     
    </div>
  );
}


export default CategoryDropdown;