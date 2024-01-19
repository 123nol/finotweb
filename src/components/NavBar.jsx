import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Menu, Close } from '@mui/icons-material';

import { HashLink } from "react-router-hash-link";
import './NavBar.css';

const NavBar = (props) => {
  const [clicked, setClick] = useState(false);
  // const [order, setOrder] = useState(1);

  return (
    <div className={clicked ? "bar extend" : "bar"}>
      <div className="banner">
        <NavLink
          to="/"
          className="bannerLink links"
          onClick={() => {
            props.change(1);
            window.scrollTo(0, 0);
          }}
        >
          <div className="logoContainer">
            <div className="imageContainer">
              <img src="https://pbs.twimg.com/profile_images/1014230324765757440/uF5RbV1U_400x400.jpg" alt="" style={{width: "100%", borderRadius: "100%"}}/>
            </div>

            <p>
              Rotaract <br /><span style={{fontSize: "25px"}}>club of Finot</span> {" "}
            </p>
          </div>
        </NavLink>
      </div>
      <nav id="nav" className={clicked ? "#nav active" : "#nav"}>
        <NavLink
          to="/"
          className={props.order === 1 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            props.change(1);
            window.scrollTo(0, 0);
          }}
        >
          HOME
        </NavLink>

        <HashLink
          to="/#service"
          className={props.order === 2 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            props.change(2);
            window.scrollTo(0, 0);
          }}
        >
          SERVICES
        </HashLink>
        {/* <HashLink
          to="/#product"
          className={props.order === 3 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            props.change(3);
          }}
        >
          PRODUCTS
        </HashLink> */}
        <NavLink
          to="/project"
          className={props.order === 4 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            props.change(4);
            window.scrollTo(0, 0);
          }}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/contact"
          className={props.order === 5 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            props.change(5);
            window.scrollTo(0, 0);
          }}
        >
          CONTACT
        </NavLink>
      </nav>

      <div
        className="burger"
        onClick={() => {
          setClick(!clicked);
        }}
      >
        {clicked ? <Close /> : <Menu />}
      </div>
    </div>
  );
};

export default NavBar;
