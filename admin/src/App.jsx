import React, { useContext } from "react";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import List from "./pages/List/List";
import EditList from "./pages/editList/EditList";
import NewList from "./pages/newList/NewList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import { AuthContext } from "./context/authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {user && (
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/newList" element={<NewList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/lists/:listId" element={<EditList />} />
            <Route path="/lists" element={<List />} />
          </Route>
        )}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
