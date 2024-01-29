import React, { useEffect, useState } from "react";
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
  const [isHover, setIsHover] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/movie/findOne/${item}`, {
        headers: {
          token: `Bearer ${import.meta.env.VITE_ACCESS}`,
        },
      })
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [item]);

  console.log(item);

  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listItem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={movie.img}
        // src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHover && (
        <div>
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
    </div>
  );
};

export default ListItem;
