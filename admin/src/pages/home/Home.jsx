import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./home.css";
import LineChart from "../../components/chart/LineChart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import MemberWidget from "../../components/memberWidget/MemberWidget";
import TransWidget from "../../components/transWidget/TransWidget";

const Home = () => {
  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/api/user/stats`, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
      .then((res) => {
        const sortedRes = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        sortedRes.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: months[item._id - 1], newUser: item.total },
          ])
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <FeaturedInfo />
      {userStats.length !== 0 && (
        <LineChart
          userData={userStats}
          title="User Analytics"
          dataKey="newUser"
        />
      )}
      <div className="widgets">
        <MemberWidget />
        <TransWidget />
      </div>
    </div>
  );
};

export default Home;
