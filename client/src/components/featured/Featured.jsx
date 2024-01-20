import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import matrix from "../../assets/matrix.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="romance">Romance</option>
            <option value="horror">Horror</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentry">Documentry</option>
          </select>
        </div>
      )}

      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
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
