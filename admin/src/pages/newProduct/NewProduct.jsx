import React from "react";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newproduct">
      <h1 className="newproduct-title">New Product</h1>
      <form action="" className="newproduct-form">
        <div className="newproduct-item">
          <label htmlFor="">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Stock</label>
          <input type="text" placeholder="123 " />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newproduct-bt">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
