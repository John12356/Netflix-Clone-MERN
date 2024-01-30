import React from "react";
import { Link, useLocation } from "react-router-dom";

const EditList = () => {
  const location = useLocation();
  const list = location.state.list;

  return (
    <div className="product">
      <div className="product-title-cont">
        <h1 className="product-title">List</h1>
        <Link to="/newList">
          <button className="product-add-bt">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-right">
          <div className="product-info-top">
            <span className="product-name">{list.title}</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">Id:</span>
              <span className="product-info-value">{list._id}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Genre:</span>
              <span className="product-info-value">{list.genre}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Type:</span>
              <span className="product-info-value">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form action="" className="product-form">
          <div className="product-form-left">
            <label htmlFor="">Movie Title</label>
            <input type="text" placeholder={list.title.toString()} />
            <label htmlFor="">Genre</label>
            <input type="text" placeholder={list.genre.toString()} />
            <label htmlFor="">Type</label>
            <input type="text" placeholder={list.type.toString()} />
            <button className="product-bt">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditList;
