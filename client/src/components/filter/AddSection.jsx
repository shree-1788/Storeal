import React, { useState } from "react";
import AddInventoryDropdown from "../cardAccessories/AddInventoryDropdown";
import CategoryDropdown from "../cardAccessories/CategoryDropdown";
import { Button } from "react-bootstrap";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddSection = (props) => {

  const [filter, setFilter] = useState({
    labFilter: "",
    categoryFilter: "",
  });
  const handleChangeCategory = (event) => {
    const { value } = event.target;
    setFilter({ ...filter, categoryFilter: value });
  };

  const handleChangeLab = (event) => {
    const { value } = event.target;
    setFilter({ ...filter, labFilter: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onChangeFilter(filter);
    setFilter({
      labFilter: "",
      categoryFilter: ""
    });
  }






  

  return (
    <div
      style={{ backgroundColor: "#F0EAD6" }}
      className=" mt-5 p-2 border border-dark"
    >
      <form action="post" onSubmit={handleSubmit}>
      <div className="d-flex align-middle">

        
        <FormControl sx={{ m: 1, minWidth: 300 }} >

          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Lab"
            value={filter.filter}
            onChange={handleChangeCategory}
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Stationary">Stationary</MenuItem>
          </Select>
          </FormControl>
          
          <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-helper-label">Labs</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Lab"
            value={filter.labFilter}
            onChange={handleChangeLab}
          >
            <MenuItem value="401">401</MenuItem>
            <MenuItem value="402">402</MenuItem>
            <MenuItem value="403">403</MenuItem>
            <MenuItem value="404">404</MenuItem>
          </Select>
          
         
        </FormControl>
        <div className="flex-grow-1" >
          <Button type="submit" className="">
            <FilterAltIcon />
          </Button>
          </div>
          </div>
          </form>

        
      </div>
    
    
  );
};

export default AddSection;
