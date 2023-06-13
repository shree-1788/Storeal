import React from "react";
import FixedDashboard from "../../pages/FixedDashboard";
import MasterCard from "./MasterCard";
import { useNavigate } from "react-router-dom";

const MasterDashboard = () => {
  return (
    <>
      <div className="d-flex justify-content-around mt-5">
        <MasterCard name="Faculty" colour="#00C0EF" />
        <MasterCard name="Category" colour="#04A559" />
        <MasterCard name="Specification" colour="#F39C12" />
      </div>
    </>
  );
};

export default MasterDashboard;
