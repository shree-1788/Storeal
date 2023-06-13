import React from "react";
import { Button } from "react-bootstrap";
import { InputGroup,FormControl, MenuItem } from "react-bootstrap";
import LabDropDown from "./FormContents/LabDropDown";
import CategoryDropDown from "./FormContents/CategoryDropDown";
const MoveToLabForm = () => {
  return (
    <>
      <form action="post" >
        <div>
          <div className="d-flex justify-content-around">
            <LabDropDown />
            <div>
              <InputGroup>
                <InputGroup.Text>Machine no.</InputGroup.Text>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  
                />
              </InputGroup>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <CategoryDropDown />
            <div>
              <InputGroup>
                <InputGroup.Text>Sub Category</InputGroup.Text>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                 
                />
              </InputGroup>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          
          className="btn-success "
          size="lg"
        >
          Add
        </Button>
      </form>
    </>
  );
};

export default MoveToLabForm;
