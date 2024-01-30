import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const { user } = useContext(AuthContext);
  const [isHover, setIsHover] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/api/movie/findOne/${item}`, {
        headers: {
          token:
            // "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [item]);

  return (
    <div
      className="listItem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && (
        <div className="hoverkulla">
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <Link to="/watch" state={{ movie: movie }}>
                <PlayArrow className="icon" />
              </Link>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="genre">
              <b>{movie.title}</b>
            </div>

            <div className="itemInfoTop">
              <span>
                {movie.duration}
                {movie.isSeries ? " Seasons" : " min"}
              </span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </div>
      )}
      <img src={movie.img} alt="" />
    </div>
  );
};

export default ListItem;
