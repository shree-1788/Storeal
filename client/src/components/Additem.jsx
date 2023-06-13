import React from "react";
import Dashmodal from "./Dashmodal";
import Dropdowns from "./Dropdowns";

const Additem = () => {
  return (
    <div
      style={{ backgroundColor: "#f5f5f5" }}
      className=" mt-5 d-flex align-items-center justify-content-between"
    >
      <Dropdowns />
      <Dropdowns />
      <Dropdowns />
      <Dropdowns />
      <Dropdowns />

      <Dashmodal></Dashmodal>
    </div>
  );
};

export default Additem;
