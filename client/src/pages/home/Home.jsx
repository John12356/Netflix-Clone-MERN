import React, { useContext, useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const Home = ({ type }) => {
  const { user } = useContext(AuthContext);
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER}/api/list${type ? "?type=" + type : ""}${
          genre ? "&genre=" + genre : ""
        }
        `,
        {
          headers: {
            token:
              // "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken,
              `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => console.log(err));
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} key={list._id} />
      ))}
    </div>
  );
};

export default Home;
