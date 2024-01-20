import { userData } from "../../assets/dummyData";
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
      .get("http://localhost:8080/api/users/stats", {
        headers: {
          token: `Bearer ${import.meta.env.VITE_ACCESS}`,
        },
      })
      .then((res) => {
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: months[item._id - 1], newUser: item.total },
          ])
        );
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(userStats);

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
