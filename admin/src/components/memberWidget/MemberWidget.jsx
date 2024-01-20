import React from "react";
import "./memberWidget.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const MemberWidget = () => {
  return (
    <div className="member-widget">
      <span className="widget-title">Newly Joined</span>
      <ul className="member-list">
        <li className="member-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="user">
            <span className="username">HemaPrasad</span>
            <span className="user-desig">Software Engineer</span>
          </div>
          <button className="member-bt">
            <VisibilityIcon className="user-vis-icon" /> Displpay
          </button>
        </li>

        <li className="member-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="user">
            <span className="username">HemaPrasad</span>
            <span className="user-desig">Software Engineer</span>
          </div>
          <button className="member-bt">
            <VisibilityIcon className="user-vis-icon" /> Displpay
          </button>
        </li>

        <li className="member-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="user">
            <span className="username">HemaPrasad</span>
            <span className="user-desig">Software Engineer</span>
          </div>
          <button className="member-bt">
            <VisibilityIcon className="user-vis-icon" /> Displpay
          </button>
        </li>

        <li className="member-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="user">
            <span className="username">HemaPrasad</span>
            <span className="user-desig">Software Engineer</span>
          </div>
          <button className="member-bt">
            <VisibilityIcon className="user-vis-icon" /> Displpay
          </button>
        </li>

        <li className="member-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="user">
            <span className="username">HemaPrasad</span>
            <span className="user-desig">Software Engineer</span>
          </div>
          <button className="member-bt">
            <VisibilityIcon className="user-vis-icon" /> Displpay
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MemberWidget;
