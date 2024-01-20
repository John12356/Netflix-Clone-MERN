import React from "react";
import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={movie.video}
      />
    </div>
  );
};

export default Watch;
