import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const url =
    "https://cdn2.scratch.mit.edu/get_image/gallery/29518700_170x100.png";
  return (
    <div className="home">
      <div className="home_up">
        <h1>Welcome To Channel Name</h1>
        <img src={url} alt="" />
      </div>
      <div className="home_mid">
        <a href="#">Visit Our Channel</a>
        <NavLink
          to="/About"
          className="lnk"
          style={{ margin: "1rem", textDecoration: "none" }}
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
};
export default Home;
