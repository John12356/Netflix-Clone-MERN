import React from "react";
import "./featuredInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="cash-cont">
          <span className="money">Rs. 25,615</span>
          <span className="money-rate">
            -11.4
            <ArrowDownwardIcon className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="cash-cont">
          <span className="money">Rs. 44,415</span>
          <span className="money-rate">
            -1.4
            <ArrowDownwardIcon className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="cash-cont">
          <span className="money">Rs. 22,025</span>
          <span className="money-rate">
            +2.4
            <ArrowUpwardIcon className="featured-icon " />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
