import React from "react";
import { useState } from "react";
import mediaQuery from "./components/hooks/mediaQuery";
import menuIcon from "./components/assets/menu-icon.svg";
import closeIcon from "./components/assets/close-icon.svg";
import { Link } from "react-router-dom";
import "./components/css/index.css";

function Navbar() {
  // State to track whether the menu bar is visible or not
  const [isMenuShowed, setIsMenuShowed] = useState(false);
  const isDesktop = mediaQuery("(min-width: 768px)");

  return (
    //The NavBar
    <nav className="bg-navy_blue_home text-pure-white text-xl z-40 w-full top-0 py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="text-3xl">ProMech</h4>

        {/* Desktop View for Nav */}
        {isDesktop ? (
          <div>
            <ul className="flex justify-between gap-10">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/navpages/profile">Profile</Link>
              </li>
              <li>
                <Link to="/navpages/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/navpages/login">Login</Link>
              </li>
              <li>
                <Link to="/navpages/login">
                  Signup <i className="fas fa-caret-down" />
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="rounded-full bg-menu-button p-2"
            onClick={() => setIsMenuShowed(!isMenuShowed)}
          >
            <img src={menuIcon} alt="menu-icon" />
          </button>
        )}

        {/* Mobile View for Nav */}
        {!isDesktop && isMenuShowed && (
          <div className="fixed right-0 bottom-0 h-full bg-navy_blue_home w-[280px]">
            {/* Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuShowed(!isMenuShowed)}>
                <img alt="close-icon" src={closeIcon} />
              </button>
            </div>
            {/* Menu Items */}
            <div className="">
              <ul className="flex flex-col gap-10 ml-[33%] text-2xl text-pure-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/navpages/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/navpages/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/navpages/login">Login</Link>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
