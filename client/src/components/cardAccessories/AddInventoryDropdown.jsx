import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddInventoryDropdown = (props) => {
  const [lab, setLab] = useState("Labs");
  const handleChange = (event) => {
    const { value } = event.target;
    setLab(value);
    props.onGet(value);
  };
  return (
    <div className="d-flex">
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">Labs</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Lab"
          onChange={handleChange}
        >
          <MenuItem value="401">401</MenuItem>
          <MenuItem value="402">402</MenuItem>
          <MenuItem value="403">403</MenuItem>
          <MenuItem value="404">404</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default AddInventoryDropdown;
