
import React,{useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdowns = () => {
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (

 
    <div className='d-flex'>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Labs</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Lab"
          onChange={handleChange}
        >
            <MenuItem value={0}>401</MenuItem>
          <MenuItem value={10}>402</MenuItem>
          <MenuItem value={20}>403</MenuItem>
          <MenuItem value={30}>404</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
     
    </div>
  );
}


export default Dropdowns;