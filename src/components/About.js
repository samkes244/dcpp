import React from "react";
import "./About.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
const Body = () => {
  const url =
    "https://cdn2.scratch.mit.edu/get_image/gallery/29518700_170x100.png";
  return (
    <div className="body">
      <div>
        <img src={url} alt="" />
        <h3>
          Hi, I'm Samrat Kesharwani a Youtuber Who makes Video on FreeFire.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          including versions of Lorem Ipsum
        </h3>
      </div>
      <a href="#">
        {" "}
        <span>
          <YouTubeIcon style={{ color: "#fff" }}></YouTubeIcon>
          <p>visit Youtube</p>
          <span> </span>
        </span>
      </a>
    </div>
  );
};
export default Body;
