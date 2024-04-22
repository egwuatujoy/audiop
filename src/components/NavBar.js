import React, { useState } from "react";
import audioPhile from "../images/audiophile.png";
import shopCart from "../images/Combined Shape.png";
import burgerNav from "../images/Group.png";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <nav className="navbar">
      <img
        src={burgerNav}
        alt="burger-nav"
        className="burger-nav"
        onClick={handleClick}
      />
      <Link>
        <img src={audioPhile} alt="my logo icon" className="logo" />
      </Link>
      <ul className={show ? "hidden" : " "}>
        <li>
          <NavLink className="link" to="/headphones">
            HeadPhones
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/speakers">
            Speakers
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/earphones">
            EarPhones
          </NavLink>
        </li>
      </ul>
      <img src={shopCart} alt="logo-img" className="cart-icon" />
    </nav>
  );
};

export default NavBar;
