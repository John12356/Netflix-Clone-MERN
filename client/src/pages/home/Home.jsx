import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/list${type ? "?type=" + type : ""}${
          genre ? "&genre=" + genre : ""
        }
        `,
        {
          headers: {
            token: `Bearer ${import.meta.env.VITE_ACCESS}`,
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
