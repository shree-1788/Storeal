import React, { useState, useEffect } from "react";

function Scrap() {
  const [data, setdata] = useState([]);

  const getScrap = async () => {
    const url = "/api/scrap/getScrap";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const response = await res.json();
    if (res.status === 200) {
      setdata(response);
    } else {
      alert(response.message);
    }
  };

  useEffect(() => {
    getScrap();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container my-3">
        <h3>Scrap products</h3>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Lab</th>
              <th scope="col">Configuration Number</th>
              <th scope="col">Category</th>
              <th scope="col">Specification</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => {
              return (
                <tr key={ele._id}>
                  <td>{ele.date}</td>
                  <td>{ele.lab}</td>
                  <td>{ele.configurationNumber}</td>
                  <td>{ele.category}</td>
                  <td>{ele.specification}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Scrap;
