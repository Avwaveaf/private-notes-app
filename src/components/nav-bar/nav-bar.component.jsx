import { SearchNotes } from "../search-notes/search-notes.component";
import { CreateNote } from "../create-note/create-note.component";

import "./nav-bar.style.css";
import { useState } from "react";
export const NavBar = () => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div className={`top-container ${toggleShow ? "showNav" : ""}`}>
      <div className="nav-bar-container">
        <SearchNotes />
        <CreateNote />
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
  );
};
