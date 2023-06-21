import "./Navbar.css";
import { useState } from "react";

import {
  FaLinkedin,
  FaBehanceSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { MenuData } from "./MenuData";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const toggleNavItems = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbarItems">
      <div className="container">
        <div
          className="logo"
          aria-current="page"
          onClick={() => {
            window.location.href = "/home";
          }}
        >
          <img src="/rastmobile.jpg" alt="RastMobile" />
        </div>
        <div className="menu-icon" onClick={toggleNavItems}>
          {showNavbar ? <MdClose size={23} /> : <RxHamburgerMenu size={23} />}
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul className={showNavbar ? "nav-elements active" : "nav-elements"}>
            {MenuData.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    className={item.cName}
                    onClick={() => {
                      window.location.href = item.url;
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <span
          className={`socialMedia ${
            showNavbar ? "socialMedia active" : "socialMedia"
          }`}
        >
          <li>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutubeSquare size={23} />
            </a>
            <a href="https://www.instagram.com/mobilerast/" target="_blank">
              <FaInstagramSquare size={23} />
            </a>
            <a href="https://www.behance.net/rastmobile" target="_blank">
              <FaBehanceSquare size={23} />
            </a>
            <a
              href="https://www.linkedin.com/company/rastmobile/"
              target="_blank"
            >
              <FaLinkedin size={23} />
            </a>
          </li>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
