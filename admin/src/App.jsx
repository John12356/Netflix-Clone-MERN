import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setSidebarToggle={setSidebarToggle} />
      <div className="container">
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className="main-container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route index path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
