import { Outlet, Link } from "react-router-dom";
import { SearchNotes } from "../search-notes/search-notes.component";
import { CreateNote } from "../create-note/create-note.component";
import PropTypes from "prop-types";

import "./nav-bar.style.css";

import { useState } from "react";
export const NavBar = ({ authedUser, logOut }) => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <>
      <div className={`top-container ${toggleShow ? "showNav" : ""}`}>
        <div className="nav-bar-container">
          <SearchNotes />
          <CreateNote />
          <div className="navigation-container">
            <span>{authedUser.authedUser.name}</span>
            <Link className="navigate" to="/">
              Home
            </Link>
            <Link className="navigate" to="note-detail">
              Detail
            </Link>
            <button onClick={logOut}>Log Out</button>
          </div>
        </div>
        <div
          className="navbar-name"
          onClick={() => {
            setToggleShow(!toggleShow);
          }}
        >
          Notes Option &darr;
        </div>
      </div>
      <Outlet />
    </>
  );
};
NavBar.propTypes = {
  authedUser: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};
