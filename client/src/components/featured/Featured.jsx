import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = ({ type }) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState({});
  console.log(user.accessToken);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/api/movie/random?type=${type}`, {
        headers: {
          token:
            // "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken,
            `Bearer ${user.accessToken}`,
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
        <h1 className="featured-movie-name">{content.title}</h1>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link className="link" to="/watch" state={{ movie: content }}>
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more play">
            <InfoOutlined />
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
