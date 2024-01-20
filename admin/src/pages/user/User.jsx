import React from "react";
import "./user.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";
import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

const User = () => {
  return (
    <div className="user-div">
      <div className="user-title-cont">
        <h1 className="user-title">Edit User</h1>
        <Link className="link" to="/newUser">
          <button className="user-add-bt">Create</button>
        </Link>
      </div>
      <div className="user-cont">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="user-show-img"
            />
            <div className="user-show-top-title">
              <span className="user-show-username">Darshan</span>
              <span className="user-show-desig">Software Engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-info">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-info-title">darshan69</span>
            </div>
            <div className="user-show-info">
              <CalendarTodayIcon className="user-show-icon" />
              <span className="user-show-info-title">10.12.1999</span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-info">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-info-title">+91 12345 54321</span>
            </div>
            <div className="user-show-info">
              <MailOutline className="user-show-icon" />
              <span className="user-show-info-title">darshan12@gmail.com</span>
            </div>
            <div className="user-show-info">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-info-title">Chennai | India</span>
            </div>
          </div>
        </div>

        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="darshan69"
                  className="user-update-ip"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Darshan"
                  className="user-update-ip"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="darshan123@gmail.com"
                  className="user-update-ip"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 12345 54321"
                  className="user-update-ip"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Chennai | India"
                  className="user-update-ip"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input
                  type="text"
                  id="file"
                  name="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="user-update-bt">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
