import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const CategoryDropDown = (props) => {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    props.getValue1(value);
  };
  return (
    <>
      <div className="d-flex">
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Lab"
            value={category}
            onChange={handleChange}
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Stationary">Stationary</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default CategoryDropDown;
