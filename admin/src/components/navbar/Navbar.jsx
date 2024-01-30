import React, { useContext, useState } from "react";
import "./navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowDropDown } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthAction";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const showOption = () => {
    setShow((prev) => !prev);
  };
  const logOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="wrapper">
        <div className="nav-left">
          <div className="menu-icon">
            <MenuIcon onClick={() => setSidebarToggle((prev) => !prev)} />
          </div>

          <span className="logo">Dashboard</span>
        </div>
        <div className="nav-right">
          <div className="nav-right-cont">
            <NotificationsNoneIcon />
            <span className="badge">2</span>
          </div>
          <div className="nav-right-cont">
            <SettingsIcon />
          </div>
          <img
            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
            className="avatar"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown onClick={showOption} className="icon" />
            <div className={show ? "options show" : "options"}>
              <span>Settings</span>
              <span onClick={logOut}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
