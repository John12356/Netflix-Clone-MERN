import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = ({ type }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/movie/random?type=${type}`, {
        headers: {
          token: `Bearer ${import.meta.env.VITE_ACCESS}`,
        },
      })
      .then((res) => {
        setContent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="">Genre</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="history">Historical</option>
            <option value="romance">Romance</option>
            <option value="horror">Horror</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
          </select>
        </div>
      )}

      <img src={content.img} alt="" />
      <div className="info">
        {/* <img src={content.imgTitle} alt="" /> */}
        <h1 className="featured-movie-name">{content.title}</h1>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link className="link" to="/watch" state={{ movie: content }}>
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
