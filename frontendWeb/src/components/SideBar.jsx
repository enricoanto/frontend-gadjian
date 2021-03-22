import React from "react";
import { BiHome } from "react-icons/bi";
import { BsFillPeopleFill, BsCalendar } from "react-icons/bs";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div id="side-bar" className="full-screen side-bar">
      <div className="flex-display side-bar-group">
        <Link to= '/'>
          <button className="button-side-bar">
            <BiHome /> Beranda
          </button>
        </Link>
        <Link to= '/personnels-list'>
          <button className="button-side-bar">
            <BsFillPeopleFill /> Personnel List
          </button>
        </Link>
        <Link to= '/daily-attends'>
          <button className="button-side-bar">
            <BsCalendar /> Daily Attends
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
