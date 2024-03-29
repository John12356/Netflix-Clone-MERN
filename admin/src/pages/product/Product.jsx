import React from "react";
import "./product.css";
import { Link, useLocation } from "react-router-dom";
import { Publish } from "@mui/icons-material";

const Product = () => {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie);
  return (
    <div className="product">
      <div className="product-title-cont">
        <h1 className="product-title">Movie</h1>
        <Link to="/newProduct">
          <button className="product-add-bt">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-right">
          <div className="product-info-top">
            <img src={movie.img} alt="" className="product-info-img" />
            <span className="product-name">{movie.title}</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">Id:</span>
              <span className="product-info-value">{movie._id}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Genre:</span>
              <span className="product-info-value">{movie.genre}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Year:</span>
              <span className="product-info-value">{movie.year}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Limit:</span>
              <span className="product-info-value">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form action="" className="product-form">
          <div className="product-form-left">
            <label htmlFor="">Movie Title</label>
            <input type="text" placeholder={movie.title.toString()} />
            <label htmlFor="">Year</label>
            <input type="text" placeholder={movie.year.toString()} />
            <label htmlFor="">Genre</label>
            <input type="text" placeholder={movie.genre.toString()} />
            <label htmlFor="">Limit</label>
            <input type="text" placeholder={movie.limit.toString()} />
            <label htmlFor="">Is Series</label>
            <input type="text" placeholder={movie.isSeries.toString()} />
            <label htmlFor="">Trailer</label>
            <input type="file" placeholder={movie.trailer.toString()} />
            <label htmlFor="">Video</label>
            <input type="file" placeholder={movie.video.toString()} />
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img src={movie.img} alt="" className="product-upload-img" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-bt">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
