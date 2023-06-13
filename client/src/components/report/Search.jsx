import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <>
      {/* <div class="input-group">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" />
          <label class="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button>
      </div> */}

      <div className="d-flex mt-2 ">
          <div className="">
              <input  type="search"  placeholder="Search" aria-describedby="inputGroup-sizing-lg" className="form-control"/>
          </div>
          <button type="button" className="btn btn-primary"><SearchIcon/></button>

          
      </div>
    </>
  );
};

export default Search;
