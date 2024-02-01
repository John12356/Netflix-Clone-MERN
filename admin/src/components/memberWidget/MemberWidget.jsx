import React, { useEffect, useState } from "react";
import "./memberWidget.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";

const MemberWidget = () => {
  const { user } = useContext(AuthContext);
  const [newUsers, setNewUsers] = useState([]);
  console.log(user);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/api/user?new=true`, {
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setNewUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(newUsers);
  return (
    <div className="member-widget">
      <span className="widget-title">Newly Joined</span>
      <ul className="member-list">
        {newUsers.map((user) => (
          <li key={user._id} className="member-item">
            <img
              src={
                user.profilePic ||
                "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="user">
              <span className="username">{user.username}</span>
            </div>
            <button className="member-bt">
              <VisibilityIcon className="user-vis-icon" /> Displpay
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberWidget;
