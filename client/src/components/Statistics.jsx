import React, { useState, useEffect } from "react";

function Statistics() {
  const [data, setdata] = useState({
    lab: "",
    category: "",
    specification: "",
  });

  const [category, setcategory] = useState([]);
  const [specification, setSpecification] = useState([]);

  const getCategory = async () => {
    const url = "/api/productMaster/getCategory";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const response = await res.json();
    if (res.status === 200) {
      setcategory(response);
    } else {
      alert(response.message);
    }
  };

  const getSpecification = async () => {
    const url = "/api/specificationMaster/getSpecification";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const response = await res.json();
    if (res.status === 200) {
      setSpecification(response);
    } else {
      alert(response.message);
    }
  };

  useEffect(() => {
    getCategory();
    getSpecification();
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { lab, category, specification } = data;
    const url = "/api/Statistics/getCount";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ lab, category, specification }),
    });
    const response = await res.json();
    if (res.status === 200) {
      if (response === 0) {
        alert("No ptoduct found matching with given details.");
        setdata({ lab: "", category: "", specification: "" });
      } else {
        alert(`Total ${response} products found matching with given details.`);
        setdata({ lab: "", category: "", specification: "" });
      }
    } else {
      alert(response.message);
    }
  };

  return (
    <>
      <div className="container my-5">
        <h3>Statistics</h3>
        <hr />
        <div className="row justify-content-start">
          <div className="col col-sm-3">
            <label htmlFor="lab" className="form-label">
              Lab no :
            </label>
            <select
              id="lab"
              className="custom-select"
              name="lab"
              value={data.lab}
              onChange={handleChange}
            >
              <option>Select Lab</option>
              <option>401</option>
              <option>402</option>
              <option>501</option>
              <option>507</option>
              <option>601</option>
              <option>603</option>
              <option>607</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-start mt-3">
          <div className="col col-sm-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Category :
            </label>
            <select
              className="custom-select"
              name="category"
              value={data.category}
              onChange={handleChange}
            >
              <option>Select category</option>
              {category.map((ele) => {
                return <option key={ele._id}>{ele.category}</option>;
              })}
            </select>
          </div>
          <div className="col col-sm-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Specification :
            </label>
            <select
              className="custom-select"
              name="specification"
              value={data.specification}
              onChange={handleChange}
            >
              <option>Select specification</option>
              {specification.map((ele) => {
                return <option key={ele._id}>{ele.specification}</option>;
              })}
            </select>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleClick}
        >
          Get total count
        </button>
      </div>
    </>
  );
}

export default Statistics;
