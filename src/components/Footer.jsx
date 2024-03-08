import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MailIcon from "@mui/icons-material/Mail";

import { Twitter, Instagram,  } from "@mui/icons-material";

import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer" id="foot">
      <div className="footerDetails">
        <div className="footerInfo">
          <h1>Rotaract of Finot</h1>
          <p>
          THE FOUR WAY TEST

            <em>
              
              OF THE THINGS WE THINK, SAY OR DO:<br/>

            IS IT THE TRUTH?<br/>

          IS IT FAIR TO ALL CONCERNED?<br/>

          WILL IT BUILD GOODWILL AND BETTER FRIENDSHIPS?<br/>

        WILL IT BE BENEFICIAL TO ALL CONCERNED?<br/>
            </em>
          </p>
        </div>
        <div className="footerInfo">
          <h1>Useful Links</h1>
          <p>
            <li>
              <AiOutlineRight />
              <Link
                className="redirectLink"
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <AiOutlineRight />
              <HashLink className="redirectLink" to="/#service">
                events
              </HashLink>
            </li>
            <li>
              <AiOutlineRight />
              <HashLink
                className="redirectLink"
                to="/#product"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Projects
              </HashLink>
            </li>

            
            <li>
              <AiOutlineRight />
              <Link
                className="redirectLink"
                to="/contact"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Contact
              </Link>
            </li>
          </p>
        </div>

        <div className="footerInfo">
          <h1>Contact Us</h1>
          <p>
           

            <li>
              <Instagram className="icon" />
              <p> <a href="www.google.com" style={{textDecoration:"none", color:"black"}}>Instagram </a></p>
            </li>
            <li>
              <Twitter className="icon" />
              <p> <a href="www.google.com" style={{textDecoration:"none", color:"black"}}>Twitter</a></p>
            </li>
            <li>
              <MailIcon className="icon" />
              <p>earaldtradinginfo@gmail.com</p>
            </li>
            <li>
              <MailIcon className="icon" />
              <p>info@earaldtradinget.com</p>
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
