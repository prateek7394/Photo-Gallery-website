import React from "react";
import "./Navbar.css";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="parent">
        <div className="icons">
          <div className="settings"><FiSettings /></div>
          <div className="notifications"><IoNotificationsOutline /></div>
        </div>
        <div>
          <header>
            <nav className="navbar">
              <ul>
                <li>
                  <a href="/">Timeline</a>
                </li>
                <li>
                  <a href="/">Albums</a>
                </li>
                <li>
                  <a href="/">Events</a>
                </li>
                <li>
                  <a href="/">Favorites</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="button" >
          <button className="btn"><IoIosAddCircleOutline /> Upload Photos</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
