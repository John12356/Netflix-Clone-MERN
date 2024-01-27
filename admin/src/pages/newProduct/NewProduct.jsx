import React from "react";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newproduct">
      <h1 className="newproduct-title">New Movie</h1>
      <form className="newproduct-form">
        <div className="newproduct-item">
          <label htmlFor="">Image</label>
          <input type="file" id="img" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Title Image</label>
          <input type="file" id="img-title" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Thumbnail Image</label>
          <input type="file" id="img-thumb" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Title</label>
          <input type="text" placeholder="John Wick" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Description</label>
          <input type="text" placeholder="description" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Genre</label>
          <input type="text" placeholder="Action" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Year</label>
          <input type="text" placeholder="2020" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Limit</label>
          <input type="text" placeholder="16" />
        </div>

        <div className="newproduct-item">
          <label htmlFor="">Duration</label>
          <input type="text" placeholder="136min" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Is Series</label>
          <select name="active" id="series">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Trailer</label>
          <input type="file" id="trailer" />
        </div>
        <div className="newproduct-item">
          <label htmlFor="">Video</label>
          <input type="file" id="video" />
        </div>

        <button className="newproduct-bt">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
