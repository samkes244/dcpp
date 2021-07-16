import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const menu = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));
  const liStyles = {
    listStyle: "none",
    padding: "0.8em",
    margin: "0.2em",
    color: "#fff",
    textDecoration: "none"
  };

  return (
    <div className="header">
      <div
        className="header_nav"
        // style={{
        //   display: "flex",
        //   justifyContent: "spaceBetween",
        //   // // justifyContent: "center",
        //   // alignItems: "center",
        //   paddingTop: "4vw"
        // }}
      >
        <div className="header_menu">
          {menuOpen ? (
            <span style={{ align: "left" }}>
              <MenuRoundedIcon
                className="nav_icon"
                style={{
                  color: "#fff"
                }}
                onClick={menu}
              ></MenuRoundedIcon>
            </span>
          ) : (
            <span>
              <ClearRoundedIcon
                className="nav_icon"
                style={{
                  color: "#fff"
                }}
                onClick={menu}
              ></ClearRoundedIcon>
            </span>
          )}
        </div>
        <center>
          <h1 style={{ color: "#fff", align: "center" }}> Channel Name</h1>
        </center>
        <div> </div>
      </div>
      {menuOpen ? (
        ""
      ) : (
        <div className="nav_options">
          <ul>
            <center>
              <NavLink to="/" className="a" style={liStyles}>
                <li onClick={menu} style={liStyles}>
                  {/* <a href="#" style={liStyles}> */} Home {/* </a> */}
                </li>
              </NavLink>
              <NavLink to="/about" className="a" style={liStyles}>
                <li onClick={menu} style={liStyles}>
                  {/* <a href="#" style={liStyles}> */} About {/* </a> */}
                </li>
              </NavLink>
              <NavLink to="/contact" className="a" style={liStyles}>
                <li onClick={menu} style={liStyles}>
                  {/* <a href="#" style={liStyles}> */} Contact {/* </a> */}
                </li>
              </NavLink>
              {/* <li onClick={menu} style={liStyles}> */}
              {/* <a href="#" style={liStyles}> */} Services {/* </a> */}
              {/* </li> */}
            </center>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Header;
