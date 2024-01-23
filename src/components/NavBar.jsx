import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Menu, Close } from '@mui/icons-material';

import { HashLink } from "react-router-hash-link";
import './NavBar.css';

const NavBar = (props) => {
  const [clicked, setClick] = useState(false);
  // const [order, setOrder] = useState(1);
  const[nav,setNav]=useState(false)
  const handleScroll= ()=>{
    window.scrollY>=80?setNav(true):setNav(false)
}
window.addEventListener('scroll', handleScroll)

  return (
    <div className={clicked ? "bar extend" : "bar"} 
    style={{backgroundColor:nav===false?"transparent":"rgb(83, 121, 143)", boxShadow:nav===false?"none": "0 10px 20px 0px #9c9c98"}} 
    >
      <div className= "banner">
        <NavLink
          to="/"
          className="bannerLink links"
          onClick={() => {
          
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
         
            window.scrollTo(0, 0);
          }}
        >
          HOME
        </NavLink>

        <HashLink
          to="/#events"
          className={props.order === 2 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
         
            window.scrollTo(0, 0);
          }}
        >
          EVENTS
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
        <HashLink
          to="/#projects"
          className={props.order === 4 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
  
            window.scrollTo(0, 0);
          }}
        >
          PROJECTS
        </HashLink>
        <NavLink
          to="/contact"
          className={props.order === 5 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
          
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
