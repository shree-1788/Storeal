import React, { useState, useEffect } from "react";

function MasterProduct() {
  const [category, setCategory] = useState();

  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const url = "/api/productMaster/getCategory";
    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },
    });

    const res = await response.json();
    setProduct(res);
    console.log(res);
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/api/productMaster/addCategory";
    const jwtoken = localStorage.getItem("auth-token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": jwtoken,
      },

      body: JSON.stringify({
        category,
      }),
    });

    const res = await response.json();
    console.log(res);
    if (response.status === 200) {
      //   navigate("/");
      window.alert("Successfully added");
      window.location.reload();
    } else {
      window.alert(res.message);
    }
  };

  return (
    <>
      <div className="container my-4 col col-sm-8">
        <h1>Products master table</h1>
        <div className="container add shadow p-3 mb-5 bg-body rounded">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Category
              </label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              Add
            </button>
          </form>
        </div>

        <div className="mt-4 col col-sm-8 text-center mx-auto">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th scope="row">1</th>
                <td>Mouse</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Keyboard</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">RAM</td>
              </tr> */}
              {product.map((ele, idx) => {
                return (
                  <tr key={ele._id}>
                    {/* <th scope="row">2</th> */}
                    <td>{ele.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MasterProduct;
