import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Navigation = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
